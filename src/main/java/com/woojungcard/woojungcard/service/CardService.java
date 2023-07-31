package com.woojungcard.woojungcard.service;

import java.util.List;

import com.woojungcard.woojungcard.domain.dto.CardProductDTO;
import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;

public interface CardService {
	public CardApplicationResponse cardApplication(Long id);
	
	public List<CardProductDTO> cardList(); 
}
