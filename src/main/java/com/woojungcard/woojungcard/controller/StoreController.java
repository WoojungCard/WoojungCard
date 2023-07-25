package com.woojungcard.woojungcard.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.request;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.request.StoreIdCheckRequest;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.service.StoreService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/store")
@RequiredArgsConstructor

public class StoreController {
	
	private final StoreService StoreService;
	
	@GetMapping("/idcheck")
	public ResponseEntity<String> idCheck(@RequestBody StoreIdCheckRequest request)throws StoreIdCheckException{
		return StoreService.storeIdCheck(request);
	}
	
	@PostMapping("/signup")
	public ResponseEntity<String> StoreSignUp(@RequestBody StoreSignUpRequest)
}
