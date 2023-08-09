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
	
	// Create Access Token
	public String createAccessToken(Long id){
		byte[] keyBytes = Decoders.BASE64.decode(ACCESS_SECRET_KEY);
        Key key = Keys.hmacShaKeyFor(keyBytes);
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
	
	// Create Refresh Token
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
	
	// Get Access Token
	public String getAccessToken() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        return request.getHeader("AccessToken");
    }
	
	// Get Refresh Token
	public String getRefreshToken(){
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        return request.getHeader("RefreshToken");
    }
	
	// Token Info
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
	
	// Check Both Refresh AND Access token
	 public String isValidTokens(){ 
        String accessToken = getAccessToken();
        String refreshToken = getRefreshToken();
        if(!isValidAccessToken(accessToken)){
            return isValidRefreshToken(refreshToken);
        }
        return "OK";
    }

	 // Check Access Token
    public boolean isValidAccessToken(String accessToken){
        if(accessToken == null) 		    return false;
        if(tokenToDTO(accessToken) == null) return false;
        return true;
    }

    // Check Refresh Token
    private String isValidRefreshToken(String refreshToken) {
        try {
            HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getResponse();
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

    // New Create Access Token
    private String refreshAccessToken(HttpServletResponse response, RefreshToken redisToken) {
        String newAccessToken = createAccessToken(redisToken.getId());
        return newAccessToken;
    }

}
