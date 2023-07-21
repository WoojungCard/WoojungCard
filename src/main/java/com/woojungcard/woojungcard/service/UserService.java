package com.woojungcard.woojungcard.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.woojungcard.woojungcard.domain.entity.User;
import com.woojungcard.woojungcard.domain.request.SignUpRequest;
import com.woojungcard.woojungcard.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public User findById(Long id) {
		return userRepository.findById(id);
	}
	
	public int signUp(SignUpRequest request) {		
		return userRepository.insertUser(request);
	}

}
