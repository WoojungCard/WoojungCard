package com.woojungcard.woojungcard.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.woojungcard.woojungcard.domain.entity.User;


@Mapper
public interface UserMapper {	
	List<User> findAllUser();
}
