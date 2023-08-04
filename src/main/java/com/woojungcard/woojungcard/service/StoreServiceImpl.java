package com.woojungcard.woojungcard.service;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.woojungcard.woojungcard.config.EncryptConfig;
import com.woojungcard.woojungcard.domain.dto.StoreDTO;
import com.woojungcard.woojungcard.domain.request.StoreAppStatusChangeRequest;
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
import com.woojungcard.woojungcard.exception.StoreAppStatusChangeException;
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
public Boolean storeIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException{
	Integer countId = storeRepository.storeIdCheck(request);
	if (countId == 0) {
		return true;
	} else {
		return false;
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
	Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();

	String businessNumber = storeRepository.findBNById(id);
	
	String encodedPwd = encryptConfig.getEncrypt(request.getStorePwd(), businessNumber);
	request.setStorePwd(encodedPwd);
	request.setId(id);
	
	Integer updateRow = storeRepository.storeInfoUpdate(request);
	
	if(updateRow != 0) {
		return new ResponseEntity<String>("변경이 완료되었습니다.", HttpStatus.OK);
	}else {
		throw new StoreUpdateException();
	}
}

// Store Login
public StoreLoginResponse storeLogin(StoreLoginRequest request) throws LoginException {
	String encodedPwd = encryptConfig.getEncrypt(request.getStorePwd(), request.getBusinessNumber()); 
	request.setStorePwd(encodedPwd);
	StoreDTO store = storeRepository.storeLogin(request);
	if (store.getId() != null) {
		String accessToken = jwtService.createAccessToken(store.getId());
		String refreshToken = jwtService.createRefreshToken(store.getId());
		return new StoreLoginResponse(accessToken, refreshToken);                
	} else {
		throw new LoginException();
	}
}

//Store Get Info
	public StoreInfoResponse storeGetInfo() {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		StoreInfoResponse response = storeRepository.storeGetInfo(id);
		return response;
	}
	
//store Application Info
	public List<StoreAppInfoResponse> storeAppInfo(){
		return storeRepository.storeAppInfo();
	}
//store Application Status
	public List<StoreAppStatusResponse> storeAppStatus(){
		return storeRepository.storeAppStatus();
	}
//store Application Status change
	public StoreAppStatusResponse storeAppStatusChange(StoreAppStatusChangeRequest request){
		System.out.println(request.getId());
		return storeRepository.storeAppStatusChange(request);
	}
}
