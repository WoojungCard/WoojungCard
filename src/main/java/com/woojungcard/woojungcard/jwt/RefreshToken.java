package com.woojungcard.woojungcard.jwt;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RefreshToken {
	private String refreshToken;
	private Long id;
}
