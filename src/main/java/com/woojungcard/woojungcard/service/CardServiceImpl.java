package com.woojungcard.woojungcard.service;

import org.springframework.stereotype.Service;

import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;
import com.woojungcard.woojungcard.repository.CardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CardServiceImpl implements CardService {
	
	private final CardRepository cardRepository;
	
	public CardApplicationResponse cardApplication(Long id) {
		return cardRepository.cardApplication(id);
	}
	

}
