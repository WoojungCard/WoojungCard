package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.domain.dto.CardProductDTO;
import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;

@Repository
@Mapper
public interface CardRepository {
	CardApplicationResponse cardApplication(Long id);
	
	List<CardProductDTO> cardList();
}
