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
	
	Integer storeSignUp(StoreSignUpRequest request) throws SignUpException;
	
	Integer storeIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException;
	
	Integer storeInfoUpdate(StoreUpdateRequest request) throws StoreUpdateException;
	
	String findBNById(Long id);
	
	StoreDTO storeLogin(StoreLoginRequest request) throws LoginException;
	
	StoreInfoResponse storeGetInfo(Long id);
	
	//Store Application Status
	List<StoreAppInfoResponse> storeAppInfo();
	
	List<StoreAppStatusResponse> storeAppStatus();
	
	StoreAppStatusResponse storeAppStatusChange(Long id); 
	
	List<StoreDTO> storeList();

	String findPwdById(Long id);
	
	List<StoreSalesManagementResponse> storeSalesManagement(StoreSalesManagementRequest request);
	
	StoreSalesReceiptResponse storeSalesReceiptDetails(StoreSalesReceiptRequest request);
	
	Integer insertStorePayment(StorePaymentRequest request) throws Exception;
	
	Long getStorePaymentDeposit(StorePaymentDepositRequest request);
}
