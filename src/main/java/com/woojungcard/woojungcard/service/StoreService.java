package com.woojungcard.woojungcard.service;

import org.springframework.http.ResponseEntity;

import com.woojungcard.woojungcard.domain.request.StoreIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.StoreSignUpRequest;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;

public interface StoreService {
	public ResponseEntity<String> storeIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException;
	public ResponseEntity<String> storeSignUp(StoreSignUpRequest request)throws SignUpException;
}
