package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.dto.CardProductDTO;
import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;
import com.woojungcard.woojungcard.service.CardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/card")
public class CardController {
	
	private final CardService cardService;
	
	// User Card Application Info
	@GetMapping("/getInfo/{id}")
	public CardApplicationResponse cardApplication(@PathVariable("id") Long id) {
		return cardService.cardApplication(id);
	}
	
	// Card Management List
	@GetMapping("/getCardList")
	public List<CardProductDTO> cardList() throws Exception  {
		return cardService.cardList();
	}

}
