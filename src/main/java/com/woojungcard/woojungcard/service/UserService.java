package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.woojungcard.woojungcard.domain.dto.UserDTO;
import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.exception.UserIdCheckException;
import com.woojungcard.woojungcard.exception.SignUpException;

public interface UserService {
	public List<UserDTO> findById();
	// User Id Check
	public ResponseEntity<String> userIdCheck(UserIdCheckRequest request) throws UserIdCheckException;
	// User Sign Up
	public ResponseEntity<String> userSignUp(UserSignUpRequest request) throws SignUpException;
}
