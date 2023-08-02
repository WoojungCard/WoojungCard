package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.http.ResponseEntity;


import com.woojungcard.woojungcard.domain.request.StoreIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.StoreLoginRequest;
import com.woojungcard.woojungcard.domain.request.StoreSignUpRequest;
import com.woojungcard.woojungcard.domain.request.StoreUpdateRequest;
import com.woojungcard.woojungcard.domain.response.StoreLoginResponse;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.StoreUpdateException;

public interface StoreService {
	public Boolean storeIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException;
	public ResponseEntity<String> storeSignUp(StoreSignUpRequest request) throws SignUpException;
	public ResponseEntity<String> storeUpdate(StoreUpdateRequest request) throws StoreUpdateException;
	public StoreLoginResponse storeLogin(StoreLoginRequest request) throws LoginException;
	
}
