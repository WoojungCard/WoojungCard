package com.woojungcard.woojungcard.service;

import org.springframework.http.ResponseEntity;

public class StoreService {
	public <StoreDTO> findById();
	public ResponseEntity<String> storeIdCheck(StoreIdCheck request)throws StoreIdCheckException;
	public ResponseEntity<String> storeSignUp(StoreSignUpRequest request) signUpException;
}
