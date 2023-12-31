package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.woojungcard.woojungcard.domain.dto.UserDTO;
import com.woojungcard.woojungcard.domain.request.UserCardAppRequest;
import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserInfoUpdateRequest;
import com.woojungcard.woojungcard.domain.request.UserLoginRequest;
import com.woojungcard.woojungcard.domain.request.UserPaymentRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.domain.response.CardAppStatusResponse;
import com.woojungcard.woojungcard.domain.response.UserCardAppInfoResponse;
import com.woojungcard.woojungcard.domain.response.UserCardListResponse;
import com.woojungcard.woojungcard.domain.response.UserInfoResponse;
import com.woojungcard.woojungcard.domain.response.UserLoginResponse;
import com.woojungcard.woojungcard.exception.ApplicationException;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.UpdateException;
import com.woojungcard.woojungcard.exception.UserIdCheckException;


public interface UserService {
	// User Id Check
	public Boolean userIdCheck(UserIdCheckRequest request) throws UserIdCheckException;
	
	// User Sign Up
	public ResponseEntity<String> userSignUp(UserSignUpRequest request) throws SignUpException;
	
	// User Login
	public UserLoginResponse userLogin(UserLoginRequest request) throws LoginException;
	
	// User Get Info
	public UserInfoResponse userGetInfo();
	
	// User Info Update
	public ResponseEntity<String> userInfoUpdate(UserInfoUpdateRequest request) throws UpdateException;
	
	// User Card Application Info
	public UserCardAppInfoResponse userCardAppInfo();
	
	// User Card Application Status
	public List<CardAppStatusResponse> userCardAppStatus();
	
	// User list
	public List<UserDTO> userList() throws Exception;
	
	// User Card Application
	public ResponseEntity<String> userCardApp(UserCardAppRequest request) throws ApplicationException ;
	
	// User Card Payment
	public ResponseEntity<String> userCardPay(UserPaymentRequest request); 
	
	// User CardList 
	public List<UserCardListResponse> userCardListSearch();
}
