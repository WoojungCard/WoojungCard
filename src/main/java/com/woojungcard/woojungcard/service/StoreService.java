package com.woojungcard.woojungcard.service;

import org.springframework.http.ResponseEntity;

import com.woojungcard.woojungcard.domain.request.StoreIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.StoreSignUpRequest;
import com.woojungcard.woojungcard.domain.request.StoreUpdateRequest;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.StoreUpdateException;

public interface StoreService {
	public ResponseEntity<String> storeIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException;
	public ResponseEntity<String> storeSignUp(StoreSignUpRequest request)throws SignUpException;
	public ResponseEntity<String> storeUpdate(StoreUpdateRequest request)throws StoreUpdateException;
}
