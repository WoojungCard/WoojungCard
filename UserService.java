package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.woojungcard.woojungcard.domain.entity.User;
import com.woojungcard.woojungcard.domain.entity.request.SignUpRequest;
import com.woojungcard.woojungcard.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public List<User> findAll() {
		return userRepository.findAll();
	}

}
