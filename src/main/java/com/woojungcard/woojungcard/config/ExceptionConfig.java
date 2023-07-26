package com.woojungcard.woojungcard.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.UserIdCheckException;

@RestControllerAdvice
public class ExceptionConfig {
	
	// Sign Up Exception
	@ExceptionHandler(SignUpException.class)
	public ResponseEntity<String> signUpException(SignUpException e){
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	// Id Check Exception
	@ExceptionHandler(UserIdCheckException.class)
	public ResponseEntity<String> idCheckException(UserIdCheckException e){
		return new ResponseEntity<>(e. getMessage(), HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler(StoreIdCheckException.class)
	public ResponseEntity<String> idChekException(StoreIdCheckException e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
	}
}
