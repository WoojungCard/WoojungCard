package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.entity.User;
import com.woojungcard.woojungcard.domain.request.SignUpRequest;
import com.woojungcard.woojungcard.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
	
	private final UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping("/test/{id}")
	public User test(@PathVariable("id") Long id) {
		return userService.findById(id);
	}
	
	@PostMapping("/signup")
	public int signUp(@RequestBody SignUpRequest request) {
		System.out.println(request);
		return userService.signUp(request);
	}
}
