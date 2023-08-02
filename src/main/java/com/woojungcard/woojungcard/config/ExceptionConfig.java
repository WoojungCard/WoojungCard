package com.woojungcard.woojungcard.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreFindBNByIdException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;
import com.woojungcard.woojungcard.exception.StoreUpdateException;
import com.woojungcard.woojungcard.exception.UpdateException;
import com.woojungcard.woojungcard.exception.UserIdCheckException;

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
	// storeIdCheck Exception
	@ExceptionHandler(StoreIdCheckException.class)
	public ResponseEntity<String> StoreIdCheckException(StoreIdCheckException e){
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	// Update Exception
	@ExceptionHandler(UpdateException.class)
	public ResponseEntity<String> updateException(UpdateException e){
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	//storeUpdate Exception
	@ExceptionHandler(StoreUpdateException.class)
	public ResponseEntity<String> StoreUpdateException(StoreUpdateException e){
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	//storeFindById Exception
	@ExceptionHandler(StoreFindBNByIdException.class)
	public ResponseEntity<String> StoreFindByIdException(StoreFindBNByIdException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}
}