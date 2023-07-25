package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.dto.UserDTO;
import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.exception.UserIdCheckException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
	
	private final UserService userService;
	
	@GetMapping("/test")
	public List<UserDTO> test() {
		return userService.findById();
	}
	
	// User Id Check
	@PostMapping("/idcheck")
	public ResponseEntity<String> idCheck(@RequestBody UserIdCheckRequest request) throws UserIdCheckException {
		return userService.userIdCheck(request);
	}
	
	// User Sign Up
	@PostMapping("/signup")
	public ResponseEntity<String> userSignUp(@RequestBody UserSignUpRequest request) throws SignUpException {
		return userService.userSignUp(request);
	}
}
