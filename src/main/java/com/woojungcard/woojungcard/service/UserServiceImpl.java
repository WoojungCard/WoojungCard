package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.woojungcard.woojungcard.config.EncryptConfig;
import com.woojungcard.woojungcard.domain.dto.UserDTO;
import com.woojungcard.woojungcard.domain.request.UserCardAppRequest;
import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserInfoUpdateRequest;
import com.woojungcard.woojungcard.domain.request.UserLoginRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.domain.response.CardAppStatusResponse;
import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;
import com.woojungcard.woojungcard.domain.response.UserCardAppInfoResponse;
import com.woojungcard.woojungcard.domain.response.UserInfoResponse;
import com.woojungcard.woojungcard.domain.response.UserLoginResponse;
import com.woojungcard.woojungcard.exception.UserIdCheckException;
import com.woojungcard.woojungcard.jwt.JwtService;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.UpdateException;
import com.woojungcard.woojungcard.exception.ApplicationException;
import com.woojungcard.woojungcard.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {
	
	private final UserRepository userRepository;
	private final EncryptConfig encryptConfig;
	private final JwtService jwtService;

	// User Id Check
	@Transactional
	public Boolean userIdCheck(UserIdCheckRequest request) throws UserIdCheckException{
		Integer countId = userRepository.userIdCheck(request);
		if (countId == 0) {
			return true;
		} else {
			return false;
		}
	}
	
	// User Sign Up
	@Transactional
	public ResponseEntity<String> userSignUp(UserSignUpRequest request) throws SignUpException {
		String encodedPwd = encryptConfig.getEncrypt(request.getUserPwd(), request.getUserId());
		request.setUserPwd(encodedPwd);
		Integer insertRow = userRepository.userSignUp(request);
		if(insertRow != 0) {
			return new ResponseEntity<String>("등록이 완료되었습니다.", HttpStatus.OK);
		} else {
			throw new SignUpException();
		}
	}
	
	// User Login
	@Transactional
	public UserLoginResponse userLogin(UserLoginRequest request) throws LoginException {
		String encodedPwd = encryptConfig.getEncrypt(request.getUserPwd(), request.getUserId()); 
		request.setUserPwd(encodedPwd);
		UserDTO user = userRepository.userLogin(request);
		if (user.getId() != null) {
			String accessToken = jwtService.createAccessToken(user.getId());
			String refreshToken = jwtService.createRefreshToken(user.getId());
			return new UserLoginResponse(accessToken, refreshToken);                
		} else {
			throw new LoginException();
		}
	}
	
	// User Get Info
	@Transactional
	public UserInfoResponse userGetInfo() {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		UserInfoResponse response = userRepository.userGetInfo(id);
		return response;
	}
	
	// User Info Update
	@Transactional
	public ResponseEntity<String> userInfoUpdate(UserInfoUpdateRequest request) throws UpdateException {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		request.setId(id);
		
		if (request.getUserPwd().isEmpty()) {
			String oldPwd = userRepository.userOldPwd(id);
			request.setUserPwd(oldPwd);
		} else {
			String userId = userRepository.findUserIdById(id);
			String encodedPwd = encryptConfig.getEncrypt(request.getUserPwd(), userId);
			request.setUserPwd(encodedPwd);
		}
		
		Integer updateRow = userRepository.userInfoUpdate(request);
		if(updateRow != 0) {
			return new ResponseEntity<>("변경이 완료되었습니다.", HttpStatus.OK);
		} else {
			throw new UpdateException();
		}		
	}
	
	// User Card Application Info
	@Transactional
	public UserCardAppInfoResponse userCardAppInfo() {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		return userRepository.userCardAppInfo(id);
	}
	
	// User Card Application Status
	@Transactional
	public List<CardAppStatusResponse> userCardAppStatus() {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		return userRepository.userCardAppStatus(id);
	}

	// User List
	@Transactional
	public List<UserDTO> userList() throws Exception {
		return userRepository.userList();
	}
	
	// User Card Application
	@Transactional
	public ResponseEntity<String> userCardApp(UserCardAppRequest request) throws ApplicationException {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		request.setUserId(id);
		Integer insertRow = userRepository.userCardApp(request);
		if (insertRow != 0) {
			return new ResponseEntity<>("신청이 완료되었습니다.", HttpStatus.OK);
		} else {
			throw new ApplicationException();
		}	
	}
}
