package com.woojungcard.woojungcard.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.woojungcard.woojungcard.exception.UserIdCheckException;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.PayBillException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.UpdateException;
import com.woojungcard.woojungcard.exception.ApplicationException;
import com.woojungcard.woojungcard.exception.UserCardApproveException;

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
	
	// Update Exception
	@ExceptionHandler(UpdateException.class)
	public ResponseEntity<String> updateException(UpdateException e){
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	// User Card Application Exception
	@ExceptionHandler(ApplicationException.class)
	public ResponseEntity<String> applicationException(ApplicationException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	// User Card Application Approve Exception
	@ExceptionHandler(UserCardApproveException.class)
	public ResponseEntity<String> userCardApproveException(UserCardApproveException e){
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	// Pay Bill Exception
	@ExceptionHandler(PayBillException.class)
	public ResponseEntity<String> payBillException(PayBillException e){
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
}
