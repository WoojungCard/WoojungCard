package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.request.StoreAppStatusChangeRequest;
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
import com.woojungcard.woojungcard.exception.StoreAppStatusChangeException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.StoreSalesManagementException;
import com.woojungcard.woojungcard.exception.StoreUpdateException;
import com.woojungcard.woojungcard.service.StoreService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/store")
@RequiredArgsConstructor

public class StoreController {
	
	private final StoreService storeService;
	//business number check
	@PostMapping("/idcheck")
	public Boolean idCheck(@RequestBody StoreIdCheckRequest request)throws StoreIdCheckException{
		return storeService.storeIdCheck(request);
	}
	//store sign up
	@PostMapping("/signup")
	public ResponseEntity<String> StoreSignUp(@RequestBody StoreSignUpRequest request)throws SignUpException{
		return storeService.storeSignUp(request);
	}
	//store update
	@PutMapping("/update")
	public ResponseEntity<String> storeUpdate(@RequestBody StoreUpdateRequest request)throws StoreUpdateException{
		System.out.println(request);
		return storeService.storeUpdate(request);
	}
	//store login
	@PostMapping("/login")
	public StoreLoginResponse storeLogin(@RequestBody StoreLoginRequest request)throws LoginException{
		return storeService.storeLogin(request);
	}
	//store get info
	@GetMapping("/info")
	public StoreInfoResponse storeGetInfo() {
		return storeService.storeGetInfo();
	} 
	
	//store Application Info
	@GetMapping("/storeAppInfo")
	public List<StoreAppInfoResponse> storeAppInfo() {
		return storeService.storeAppInfo();
	}
	//store application status 
	@GetMapping("/storeAppStatus")
	public List<StoreAppStatusResponse> storeAppStatus(){
		return storeService.storeAppStatus();
	}
	//store application Status change
	@PutMapping("/storeAppStatusChange")
	public StoreAppStatusResponse storeAppStatusChange(@RequestBody Long id)throws StoreAppStatusChangeException{
		return storeService.storeAppStatusChange(id);
	}
	//store Sales Management
	@PostMapping("/storeSalesManagement")
	public List<StoreSalesManagementResponse> storeSalesManagement(@RequestBody StoreSalesManagementRequest request) throws StoreSalesManagementException{
		return storeService.storeSalesManagement(request);
	}
	//Store SalesRecip
	@PostMapping("/storeSalesReceiptDetails")
	public StoreSalesReceiptResponse storeSalesReceiptDetails(@RequestBody StoreSalesReceiptRequest request) {
		return storeService.storeSalesReceiptDetails(request);
	}
	//store payment 
	@PostMapping("/storePayment")
	public ResponseEntity<String> insertStorePayment(@RequestBody StorePaymentRequest request) throws Exception {
		return storeService.insertStorePayment(request);
	}
	//store payment Deposit
	@PostMapping("/storePaymentDeposit")
	public Long getStorePaymentDeposit(@RequestBody StorePaymentDepositRequest request) {
		return storeService.getStorePaymentDeposit(request);
	}
	
}
