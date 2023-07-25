package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.woojungcard.woojungcard.domain.dto.UserDTO;
import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.exception.IdCheckException;
import com.woojungcard.woojungcard.exception.SignUpException;

public interface UserService {
	public List<UserDTO> findById();
	public ResponseEntity<String> userIdCheck(UserIdCheckRequest request) throws IdCheckException;
	public ResponseEntity<String> userSignUp(UserSignUpRequest request) throws SignUpException;
}
