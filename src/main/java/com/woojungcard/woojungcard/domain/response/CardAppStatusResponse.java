package com.woojungcard.woojungcard.domain.response;

import java.time.LocalDate;

import com.woojungcard.woojungcard.domain.enums.CardType;
import com.woojungcard.woojungcard.domain.enums.StateType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class CardAppStatusResponse {
	private Long 	  id;
	private String 	  cardNumber;
	private String 	  cardName;
	private CardType  cardType;
	private LocalDate requestDate;
	private LocalDate approvalDate;
	private LocalDate expirationDate;
	private StateType state;
}
