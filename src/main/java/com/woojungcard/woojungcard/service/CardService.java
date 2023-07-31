package com.woojungcard.woojungcard.service;

import java.util.List;

import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;
import com.woojungcard.woojungcard.domain.response.CardListResponse;

public interface CardService {
	public CardApplicationResponse cardApplication(Long id);
	
	// Card All List
	public List<CardListResponse> cardList();
	
}
