package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

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
import com.woojungcard.woojungcard.domain.response.StoreSalesManagementResponse;
import com.woojungcard.woojungcard.domain.response.StoreSalesReceiptResponse;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.StoreUpdateException;

@Repository
@Mapper
public interface StoreRepository {
	//store Sign up
	Integer storeSignUp(StoreSignUpRequest request) throws SignUpException;
	// store IdCheck
	Integer storeIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException;
	//store Info Update
	Integer storeInfoUpdate(StoreUpdateRequest request) throws StoreUpdateException;
	//business Number Id find
	String findBNById(Long id);
	// store Login
	StoreDTO storeLogin(StoreLoginRequest request) throws LoginException;
	//Store get Info
	StoreInfoResponse storeGetInfo(Long id);
	//Store Application Info
	List<StoreAppInfoResponse> storeAppInfo();
	//Store Application Status
	List<StoreAppStatusResponse> storeAppStatus();
	//Store Application status change
	StoreAppStatusResponse storeAppStatusChange(Long id); 
	//store List
	List<StoreDTO> storeList();
	//store id find
	String findPwdById(Long id);
	//Store salesManagement
	List<StoreSalesManagementResponse> storeSalesManagement(StoreSalesManagementRequest request);
	//store salesReceipDetails
	StoreSalesReceiptResponse storeSalesReceiptDetails(StoreSalesReceiptRequest request);
	//store payment
	Integer insertStorePayment(StorePaymentRequest request) throws Exception;
	//store payment Deposit
	Long getStorePaymentDeposit(StorePaymentDepositRequest request);
}
