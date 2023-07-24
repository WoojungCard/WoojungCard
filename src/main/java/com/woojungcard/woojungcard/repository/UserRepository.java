package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.dto.UserDTO;

@Repository
@Mapper
public interface UserRepository {
	List<UserDTO> findById();
}
