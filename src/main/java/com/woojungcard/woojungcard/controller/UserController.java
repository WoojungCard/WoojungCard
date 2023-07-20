package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.entity.User;
import com.woojungcard.woojungcard.mapper.UserMapper;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
	
	@Autowired
	UserMapper userMapper;
	
	@GetMapping
	public List<User> getAllUser(){
		return userMapper.findAllUser();
	}

}
