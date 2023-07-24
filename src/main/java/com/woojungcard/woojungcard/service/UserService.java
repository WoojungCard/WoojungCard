package com.woojungcard.woojungcard.service;

import java.util.List;

import com.woojungcard.woojungcard.domain.dto.UserDTO;

public interface UserService {
	public List<UserDTO> findById();
}
