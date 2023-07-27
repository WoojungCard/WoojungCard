package com.woojungcard.woojungcard.jwt;

import java.security.Key;
import java.util.Date;

import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class JwtService {
	private final StringRedisTemplate redisTemplate;

	@Value("${jwt.ACCESS_SECRET_KEY}")
	private String ACCESS_SECRET_KEY;
	@Value("${jwt.REFRESH_SECRET_KEY}")
	private String REFRESH_SECRET_KEY;
	
	public String createAccessToken(Long id){
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS512;
        byte[] secretKeyByte = DatatypeConverter.parseBase64Binary(ACCESS_SECRET_KEY);
        Key key = new SecretKeySpec(secretKeyByte, signatureAlgorithm.getJcaName());
        Date now = new Date();
        
        Claims claims = Jwts.claims();
        claims.put("id", id);

        String accessToken = Jwts.builder()
                .setHeaderParam("type", "JWT")
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(System.currentTimeMillis()+ (1000 * 60 * 30))) // 만료기간은 30분으로 설정
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
        
        return accessToken;
    }
	
	public String createRefreshToken(Long id) {
        byte[] keyBytes = Decoders.BASE64.decode(REFRESH_SECRET_KEY);
        Key key = Keys.hmacShaKeyFor(keyBytes);
        Date now = new Date();
        
        String refreshToken = Jwts.builder()
                .setHeaderParam("type", "JWT")
                .setIssuedAt(now)
                .setExpiration(new Date(System.currentTimeMillis() + (1000 * 3600 * 24 * 7))) // 만료기간은 1주일로 설정
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
        // Redis에 Refresh Token 저장
        redisTemplate.opsForValue().set(refreshToken, id.toString());
        return refreshToken;
    }
	
	public String getAccessToken() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        return request.getHeader("AccessToken");
    }
	
	public String getRefreshToken(){
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        return request.getHeader("RefreshToken");
    }
	
	public TokenInfo tokenToDTO(String accessToken){
        try{
            Claims claims = Jwts
                    .parserBuilder()
                    .setSigningKey(ACCESS_SECRET_KEY)
                    .build()
                    .parseClaimsJws(accessToken)
                    .getBody();
            TokenInfo info = new TokenInfo().tokenToDTO(claims);
            return info;
        }catch (Exception e){
            return null;
        }
    }
	
	 public String isValidTokens(){ //엑세스 토큰과 리프레쉬 토큰의 유효성을 둘다 검사한다
        //check both refresh AND access token
        String accessToken = getAccessToken();
        String refreshToken = getRefreshToken();
        if(!isValidAccessToken(accessToken)){
            return isValidRefreshToken(refreshToken);
        }
        return "OK";
    }

    public boolean isValidAccessToken(String accessToken){
        if(accessToken == null) return false;
        // Access Token이 유효하지 않으면
        // is access token is not valid
        if(tokenToDTO(accessToken) == null) return false;
        return true;
    }

    private String isValidRefreshToken(String refreshToken) {
        try {
            HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getResponse();

            // MyBatis를 사용하여 Redis에서 RefreshToken을 조회
            Long id = Long.parseLong(redisTemplate.opsForValue().get(refreshToken));
            
            if (id != null) {
            	RefreshToken redisToken = new RefreshToken();
                redisToken.setId(id);
                redisToken.setRefreshToken(refreshToken);
                return refreshAccessToken(response, redisToken);
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    private String refreshAccessToken(HttpServletResponse response, RefreshToken redisToken) {
        //새로운 엑세스 토큰 생성
    	// create new access token
        String newAccessToken = createAccessToken(redisToken.getId());
//	        response.addHeader("accessToken", newAccessToken);
        return newAccessToken;
    }

}
