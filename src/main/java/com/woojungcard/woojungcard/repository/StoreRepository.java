package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.domain.dto.StoreDTO;
import com.woojungcard.woojungcard.domain.request.StoreIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.StoreLoginRequest;
import com.woojungcard.woojungcard.domain.request.StoreSignUpRequest;
import com.woojungcard.woojungcard.domain.request.StoreUpdateRequest;
import com.woojungcard.woojungcard.domain.response.StoreInfoResponse;
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
	List<StoreDTO> storeList();
}
