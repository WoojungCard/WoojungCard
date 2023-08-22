package com.woojungcard.woojungcard.domain.dto;

import java.time.LocalDate;

import com.woojungcard.woojungcard.domain.enums.CardType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor 
@NoArgsConstructor
@Getter 
@Setter
public class CardProductDTO {
	private long 	  id;
	private String    cardName;
	private CardType  cardType;
	private String 	  cardImage;
	private String 	  cardInfo;
	private LocalDate registerDate;
	private String    state;	
	private long      count;
}