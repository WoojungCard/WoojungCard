package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

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
import com.woojungcard.woojungcard.domain.response.StorePayListResponse;
import com.woojungcard.woojungcard.domain.response.StoreSalesManagementResponse;
import com.woojungcard.woojungcard.domain.response.StoreSalesReceiptResponse;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.StoreUpdateException;

public interface StoreService {
	//store IdCheck
	public Boolean storeIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException;
	//store SingnUp
	public ResponseEntity<String> storeSignUp(StoreSignUpRequest request) throws SignUpException;
	//store Update
	public ResponseEntity<String> storeUpdate(StoreUpdateRequest request) throws StoreUpdateException;
	// store Login
	public StoreLoginResponse storeLogin(StoreLoginRequest request) throws LoginException;
	//Store get Info
	public StoreInfoResponse storeGetInfo();
	//Store Application Info
	public List<StoreAppInfoResponse> storeAppInfo();
	//store Application Status 
	public List<StoreAppStatusResponse> storeAppStatus();
	//Store Application status change
	public StoreAppStatusResponse storeAppStatusChange(Long id);
	//Store salesManagement
	public List<StoreSalesManagementResponse> storeSalesManagement(StoreSalesManagementRequest request);
	//store salesReceipDetails
	public StoreSalesReceiptResponse storeSalesReceiptDetails(StoreSalesReceiptRequest request);
	//store payment
	public ResponseEntity<String> insertStorePayment(StorePaymentRequest request) throws Exception;
	//store payment Deposit
	public Long getStorePaymentDeposit(StorePaymentDepositRequest request);
	//store pay List
	public List<StorePayListResponse> storePayListSearch();
	
}

