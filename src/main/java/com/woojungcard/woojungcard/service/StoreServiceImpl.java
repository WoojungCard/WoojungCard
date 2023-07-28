package com.woojungcard.woojungcard.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.woojungcard.woojungcard.config.EncryptConfig;
import com.woojungcard.woojungcard.domain.request.StoreIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.StoreSignUpRequest;
import com.woojungcard.woojungcard.domain.request.StoreUpdateRequest;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.StoreUpdateException;
import com.woojungcard.woojungcard.jwt.JwtService;
import com.woojungcard.woojungcard.repository.StoreRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreServiceImpl implements StoreService {

private final StoreRepository storeRepository;
private final EncryptConfig encryptConfig;
private final JwtService jwtService;

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
 // store update
public ResponseEntity<String> storeUpdate(StoreUpdateRequest request) throws StoreUpdateException{
//	Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();

	String businessNumber = storeRepository.findBNById(request.getId());
	
	String encodedPwd = encryptConfig.getEncrypt(request.getStorePwd(), businessNumber);
	request.setStorePwd(encodedPwd);
	
//	request.setId(id);
	
	Integer updateRow = storeRepository.storeInfoUpdate(request);
	
	if(updateRow != 0) {
		return new ResponseEntity<String>("변경이 완료되었습니다.", HttpStatus.OK);
	}else {
		throw new StoreUpdateException();
	}
}
}
