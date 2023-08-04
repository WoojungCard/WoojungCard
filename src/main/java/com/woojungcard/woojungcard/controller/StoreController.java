package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.request.StoreIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.StoreLoginRequest;
import com.woojungcard.woojungcard.domain.request.StoreSignUpRequest;
import com.woojungcard.woojungcard.domain.request.StoreUpdateRequest;
import com.woojungcard.woojungcard.domain.response.StoreAppInfoResponse;
import com.woojungcard.woojungcard.domain.response.StoreAppStatusResponse;
import com.woojungcard.woojungcard.domain.response.StoreInfoResponse;
import com.woojungcard.woojungcard.domain.response.StoreLoginResponse;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.StoreUpdateException;
import com.woojungcard.woojungcard.service.StoreService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/store")
@RequiredArgsConstructor

public class StoreController {
	
	private final StoreService storeService;
	
	@PostMapping("/idcheck")
	public Boolean idCheck(@RequestBody StoreIdCheckRequest request)throws StoreIdCheckException{
		return storeService.storeIdCheck(request);
	}
	
	@PostMapping("/signup")
	public ResponseEntity<String> StoreSignUp(@RequestBody StoreSignUpRequest request)throws SignUpException{
		return storeService.storeSignUp(request);
	}
	@PutMapping("/update")
	public ResponseEntity<String> storeUpdate(@RequestBody StoreUpdateRequest request)throws StoreUpdateException{
		System.out.println(request);
		return storeService.storeUpdate(request);
	}
	@PostMapping("/login")
	public StoreLoginResponse storeLogin(@RequestBody StoreLoginRequest request)throws LoginException{
		return storeService.storeLogin(request);
	}
	
	@GetMapping("/info")
	public StoreInfoResponse storeGetInfo() {
		return storeService.storeGetInfo();
	} 
	
	// Store Application Info
	@GetMapping("/storeAppInfo")
	public List<StoreAppInfoResponse> storeAppInfo() {
		return storeService.storeAppInfo();
	}
	@GetMapping("/storeAppStatus")
	public List<StoreAppStatusResponse> storeAppStatus(){
		return storeService.storeAppStatus();
	}
}
