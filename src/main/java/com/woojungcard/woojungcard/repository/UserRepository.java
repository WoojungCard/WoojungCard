package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.domain.dto.UserDTO;
import com.woojungcard.woojungcard.domain.request.UserCardAppRequest;
import com.woojungcard.woojungcard.domain.request.UserCardListSearchRequest;
import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserInfoUpdateRequest;
import com.woojungcard.woojungcard.domain.request.UserLoginRequest;
import com.woojungcard.woojungcard.domain.request.UserPaymentRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.domain.response.CardAppStatusResponse;
import com.woojungcard.woojungcard.domain.response.UserCardAppInfoResponse;
import com.woojungcard.woojungcard.domain.response.UserCardListResponse;
import com.woojungcard.woojungcard.domain.response.UserInfoResponse;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.UpdateException;
import com.woojungcard.woojungcard.exception.UserIdCheckException;

@Repository
@Mapper
public interface UserRepository {
	
	List<UserDTO> findById();
	
	// User Id Check
	Integer userIdCheck(UserIdCheckRequest ruquest) throws UserIdCheckException;
	
	// User Sign Up
	Integer userSignUp(UserSignUpRequest request) throws SignUpException;
	
	// User Login
	UserDTO userLogin(UserLoginRequest request) throws LoginException;
	
	// User Get Info
	UserInfoResponse userGetInfo(Long id);
	
	// User Find UserPwd By Id
	String userOldPwd(Long id);
	
	// User Find UserID By Id
	String findUserIdById(Long id);
	
	// User Info Update
	Integer userInfoUpdate(UserInfoUpdateRequest reuqest) throws UpdateException;
	
	// User Card Application Info
	UserCardAppInfoResponse userCardAppInfo(Long id);
	
	// User Card Application Status
	List<CardAppStatusResponse> userCardAppStatus(Long id);
	
	// User List
	List<UserDTO> userList();
	
	// User Card Application
	Integer userCardApp(UserCardAppRequest request);
	
	// User Card Pay
	Integer userCardPay(UserPaymentRequest request); 
	
	// User Card List Search
	List<UserCardListResponse> userCardListSearch(Long id);
}
