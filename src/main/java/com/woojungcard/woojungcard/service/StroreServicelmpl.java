package com.woojungcard.woojungcard.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.woojungcard.woojungcard.config.EncryptConfig;
import com.woojungcard.woojungcard.domain.request.StoreIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.StoreSignUpRequest;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.repository.StoreRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StroreServicelmpl implements StoreService {

private final StoreRepository storeRepository;
private final EncryptConfig encryptConfig;

// store Id Check
public ResponseEntity<String> storeIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException{
	Integer countId = storeRepository.storeIdCheck(request);
	if (countId == 0) {
		return new ResponseEntity<String>("사용 가능한 아이디입니다.", HttpStatus.OK);
	} else {
		throw new StoreIdCheckException();
	}
}

// store Sign Up
public ResponseEntity<String> storeSignUp(StoreSignUpRequest request) throws SignUpException {
	String encodedPwd = encryptConfig.getEncrypt(request.getStorePwd(), request.getBusinessNumber());
	request.setStorePwd(encodedPwd);
	Integer insertRow = storeRepository.storeSignUp(request);
	if(insertRow != 0) {
		return new ResponseEntity<String>("등록이 완료되었습니다.", HttpStatus.OK);
	} else {
		throw new SignUpException();
	}
}
}
