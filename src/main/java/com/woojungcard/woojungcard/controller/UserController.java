package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.woojungcard.woojungcard.dto.UserDTO;
import com.woojungcard.woojungcard.service.UserService;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
	
	private final UserService userService;
	
	@GetMapping("/test")
	public List<UserDTO> test() {
		return userService.findById();
	}
}
