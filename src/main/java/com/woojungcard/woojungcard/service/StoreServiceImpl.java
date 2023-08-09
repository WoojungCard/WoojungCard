package com.woojungcard.woojungcard.service;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.woojungcard.woojungcard.config.EncryptConfig;
import com.woojungcard.woojungcard.domain.dto.StoreDTO;
import com.woojungcard.woojungcard.domain.request.StoreIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.StoreLoginRequest;
import com.woojungcard.woojungcard.domain.request.StorePaymentDepositRequest;
import com.woojungcard.woojungcard.domain.request.StorePaymentRequest;
import com.woojungcard.woojungcard.domain.request.StoreSalesManagementRequest;
import com.woojungcard.woojungcard.domain.request.StoreSalesReceiptRequest;
import com.woojungcard.woojungcard.domain.request.StoreSignUpRequest;
import com.woojungcard.woojungcard.domain.request.StoreUpdateRequest;
import com.woojungcard.woojungcard.domain.response.StoreAppInfoResponse;
import com.woojungcard.woojungcard.domain.response.StoreAppStatusResponse;
import com.woojungcard.woojungcard.domain.response.StoreInfoResponse;
import com.woojungcard.woojungcard.domain.response.StoreLoginResponse;
import com.woojungcard.woojungcard.domain.response.StoreSalesManagementResponse;
import com.woojungcard.woojungcard.domain.response.StoreSalesReceiptResponse;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.StoreUpdateException;
import com.woojungcard.woojungcard.jwt.JwtService;
import com.woojungcard.woojungcard.repository.StoreRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StoreServiceImpl implements StoreService {

	private final StoreRepository storeRepository;
	private final EncryptConfig   encryptConfig;
	private final JwtService      jwtService;

	// store Id Check
	@Transactional
	public Boolean storeIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException{
		Integer countId = storeRepository.storeIdCheck(request);
		if (countId == 0) {
			return true;
		} else {
			return false;
		}
	}

	// store Sign Up
	@Transactional
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
	@Transactional
	public ResponseEntity<String> storeUpdate(StoreUpdateRequest request) throws StoreUpdateException{
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		request.setId(id);
		if (request.getStorePwd().isEmpty()) {
			String oldPWd = storeRepository.findPwdById(id);
			request.setStorePwd(oldPWd);
		} else {
			String businessNumber = storeRepository.findBNById(id);
			String encodedPwd = encryptConfig.getEncrypt(request.getStorePwd(), businessNumber);
			request.setStorePwd(encodedPwd);
		}
		Integer updateRow = storeRepository.storeInfoUpdate(request);
		if(updateRow != 0) {
			return new ResponseEntity<String>("변경이 완료되었습니다.", HttpStatus.OK);
		}else {
			throw new StoreUpdateException();
		}
	}

	// Store Login
	@Transactional
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

	// Store Get Info
	@Transactional
	public StoreInfoResponse storeGetInfo() {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		StoreInfoResponse response = storeRepository.storeGetInfo(id);
		return response;
	}
	
	// store Application Info
	@Transactional
	public List<StoreAppInfoResponse> storeAppInfo(){
		return storeRepository.storeAppInfo();
	}
	
	// store Application Status
	@Transactional
	public List<StoreAppStatusResponse> storeAppStatus(){
		return storeRepository.storeAppStatus();
	}
	
	// store Application Status change
	@Transactional
	public StoreAppStatusResponse storeAppStatusChange(Long id){
		return storeRepository.storeAppStatusChange(id);
	}

	//store Application Management 
	@Transactional
	public List<StoreSalesManagementResponse> storeSalesManagement(StoreSalesManagementRequest request) {
		Long storeId = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		request.setStoreId(storeId);
		return storeRepository.storeSalesManagement(request);
	}
	
	// Store Sales Receipt Details
	@Transactional
	public StoreSalesReceiptResponse storeSalesReceiptDetails(StoreSalesReceiptRequest request) {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		request.setStoreId(id);
		return storeRepository.storeSalesReceiptDetails(request);
	}
	
	// Insert Store Payment
	@Transactional
	public ResponseEntity<String> insertStorePayment(StorePaymentRequest request) throws Exception {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		request.setStoreId(id);
		Integer insertRow = storeRepository.insertStorePayment(request);
		if (insertRow != 0) {
			return new ResponseEntity<>("납부 완료", HttpStatus.OK);
		} else {
			throw new Exception();
		}
	}
	
	// Get Store Payment Deposit
	@Transactional
	public Long getStorePaymentDeposit(StorePaymentDepositRequest request) {
		Long stordId = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		request.setStoreId(stordId);
		Long result = storeRepository.getStorePaymentDeposit(request);
		if (result != null) {
			return storeRepository.getStorePaymentDeposit(request);
		} else {
			Long zeroResult = 0L;
			return zeroResult;
		}
	}
}
