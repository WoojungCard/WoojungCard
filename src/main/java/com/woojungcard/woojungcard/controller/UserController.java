package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserInfoUpdateRequest;
import com.woojungcard.woojungcard.domain.request.UserLoginRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.domain.response.UserCardAppInfoResponse;
import com.woojungcard.woojungcard.domain.response.UserInfoResponse;
import com.woojungcard.woojungcard.domain.response.UserLoginResponse;
import com.woojungcard.woojungcard.exception.UserIdCheckException;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.UpdateException;
import com.woojungcard.woojungcard.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
	
	private final UserService userService;
	
	// User Id Check
	@PostMapping("/idcheck")
	public Boolean idCheck(@RequestBody UserIdCheckRequest request) throws UserIdCheckException {
		return userService.userIdCheck(request);
	}
	
	// User Sign Up
	@PostMapping("/signup")
	public ResponseEntity<String> userSignUp(@RequestBody UserSignUpRequest request) throws SignUpException {
		return userService.userSignUp(request);
	}
	
	// User 	
	@PostMapping("/login")
	public UserLoginResponse userLogin(@RequestBody UserLoginRequest request) throws LoginException {
		return userService.userLogin(request);
	}
	
	// User Get Info
	@GetMapping("/info")
	public UserInfoResponse userGetInfo() {
		return userService.userGetInfo();
	}
	
	// User Info Change
	@PutMapping("/infoChange")
	public ResponseEntity<String> userInfoUpdate(@RequestBody UserInfoUpdateRequest request) throws UpdateException {
		return userService.userInfoUpdate(request);
	}
	
	// User Card Application Info
	@GetMapping("/cardAppInfo")
	public UserCardAppInfoResponse userCardAppInfo() {
		return userService.userCardAppInfo();
	}
}
    