package com.woojungcard.woojungcard.jwt;

import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class TokenInfo {
	private Long id;
	
	public TokenInfo tokenToDTO(Claims claims) {
		Long id = Long.parseLong(String.valueOf(claims.get("id")));
		return new TokenInfo(id);
	}
}
