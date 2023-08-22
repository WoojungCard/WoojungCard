package com.woojungcard.woojungcard.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.jwt.JwtService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/token")
public class JwtController {
	private final JwtService jwtService;
	
	// Jwt Token Valid
	@GetMapping
	public ResponseEntity<String> jwtCheck(){
		String check = jwtService.isValidTokens();
		if (check != null) return new ResponseEntity<>(check, HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}
}
