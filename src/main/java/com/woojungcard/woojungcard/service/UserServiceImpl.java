package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.woojungcard.woojungcard.config.EncryptConfig;
import com.woojungcard.woojungcard.domain.dto.UserDTO;
import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserLoginRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.domain.response.UserLoginResponse;
import com.woojungcard.woojungcard.exception.UserIdCheckException;
import com.woojungcard.woojungcard.jwt.JwtService;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	
private final UserRepository userRepository;
private final EncryptConfig encryptConfig;
private final JwtService jwtService;

	public List<UserDTO> findById(){
		return userRepository.findById();
	}
	
	// User Id Check
	public ResponseEntity<String> userIdCheck(UserIdCheckRequest request) throws UserIdCheckException{
		Integer countId = userRepository.userIdCheck(request);
		if (countId == 0) {
			return new ResponseEntity<String>("사용 가능한 아이디입니다.", HttpStatus.OK);
		} else {
			throw new UserIdCheckException();
		}
	}
	
	// User Sign Up
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
}
