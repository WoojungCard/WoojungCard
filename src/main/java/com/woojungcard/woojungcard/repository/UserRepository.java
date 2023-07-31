package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.domain.dto.UserDTO;
import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserLoginRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.exception.UserIdCheckException;
import com.woojungcard.woojungcard.exception.LoginException;
import com.woojungcard.woojungcard.exception.SignUpException;

@Repository
@Mapper
public interface UserRepository {
	List<UserDTO> findById();
	// User Id Check
	Integer userIdCheck(UserIdCheckRequest ruquest) throws UserIdCheckException;
	// User Sign Up
	Integer userSignUp(UserSignUpRequest request) throws SignUpException;
	// User Login
	UserDTO userLogin(UserLoginRequest request) throws LoginException;
	// User List
	List<UserDTO> userList();
}
