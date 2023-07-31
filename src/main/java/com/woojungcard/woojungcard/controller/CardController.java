package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;
import com.woojungcard.woojungcard.domain.response.CardListResponse;
import com.woojungcard.woojungcard.service.CardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/card")
public class CardController {
	
	private final CardService cardService;
	
	// All Card List
	@GetMapping("/list")
	public List<CardListResponse> cardList() {
		return cardService.cardList();
	}
	
	// User Card Application Info
	@GetMapping("/getInfo/{id}")
	public CardApplicationResponse cardApplication(@PathVariable("id") Long id) {
		return cardService.cardApplication(id);
	}

}
