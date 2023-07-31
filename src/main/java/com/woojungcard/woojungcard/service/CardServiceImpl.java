package com.woojungcard.woojungcard.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;
import com.woojungcard.woojungcard.domain.response.CardListResponse;
import com.woojungcard.woojungcard.repository.CardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CardServiceImpl implements CardService {
	
	private final CardRepository cardRepository;
	
	public CardApplicationResponse cardApplication(Long id) {
		CardApplicationResponse response = cardRepository.cardApplication(id);
		response.setApplicationDate(LocalDate.now());
		return response;
	}
	
	// Card All List
	public List<CardListResponse> cardList() {
		return cardRepository.cardList();
	}
}
