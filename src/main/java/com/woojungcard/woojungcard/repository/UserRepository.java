package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.domain.dto.UserDTO;
import com.woojungcard.woojungcard.domain.request.UserIdCheckRequest;
import com.woojungcard.woojungcard.domain.request.UserSignUpRequest;
import com.woojungcard.woojungcard.exception.IdCheckException;
import com.woojungcard.woojungcard.exception.SignUpException;

@Repository
@Mapper
public interface UserRepository {
	List<UserDTO> findById();
	Integer userSignUp(UserSignUpRequest request) throws SignUpException;
	Integer userIdCheck(UserIdCheckRequest ruquest) throws IdCheckException;
}
