package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.exception.SignUpException;
import com.woojungcard.woojungcard.exception.StoreIdCheckException;

@Repository
@Mapper
public class StoreRepository {
	List<StoreDTO> findById();
	Integer userSignUp(StoreSignUpRequest request)throws SignUpException;
	Integer userIdCheck(StoreIdCheckRequest request) throws StoreIdCheckException;
}
