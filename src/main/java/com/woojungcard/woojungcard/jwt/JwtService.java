package com.woojungcard.woojungcard.jwt;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import com.mysql.cj.x.protobuf.MysqlxExpect.Open.Condition.Key;
import com.woojungcard.woojungcard.domain.dto.UserDTO;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class JwtService {
	private final StringRedisTemplate redisTemplate;

	@Value("${jwt.ACCESS_SECRET_KEY}")
	private String ACCESS_SECRET_KEY;
	@Value("${jwt.REFRESH_SECRET_KEY}")
	private String REFRESH_SCERET_KEY;
	
	public String createAccessToken(UserDTO user) {
		byte[] keyBytes = Decoders.BASE64.decode(ACCESS_SECRET_KEY);
        Key key = Key.hmacShaKeyFor(keyBytes);
        Date now = new Date();
        claims claims = Jwts.claims();
        Jwt
	}

}
