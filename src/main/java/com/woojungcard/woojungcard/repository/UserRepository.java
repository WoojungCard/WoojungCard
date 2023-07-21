package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.domain.entity.User;
import com.woojungcard.woojungcard.domain.request.SignUpRequest;

@Repository
public class UserRepository {
	
	@Autowired
	SqlSessionTemplate sessionTemplate;
	
	public User findById(Long id){
		return sessionTemplate.selectOne("test.findById");
	}
	
	public int insertUser(SignUpRequest request) {
		return sessionTemplate.insert("test.insertUser", request);
	}

}
