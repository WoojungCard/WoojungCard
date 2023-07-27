package com.woojungcard.woojungcard.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.woojungcard.woojungcard.exception.UserIdCheckException;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;

@RestControllerAdvice
public class ExceptionConfig {
	
	// Sign Up Exception
	@ExceptionHandler(SignUpException.class)
	public ResponseEntity<String> signUpException(SignUpException e){
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	// User Id Check Exception
	@ExceptionHandler(UserIdCheckException.class)
	public ResponseEntity<String> idCheckException(UserIdCheckException e){
		return new ResponseEntity<>(e. getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	// Login Exception
	@ExceptionHandler(LoginException.class)
	public ResponseEntity<String> loginException(LoginException e){
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
}
