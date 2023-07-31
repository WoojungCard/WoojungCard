package com.woojungcard.woojungcard.domain.response;

import java.time.LocalDate;

import com.woojungcard.woojungcard.domain.enums.CardType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class CardAppStatusResponse {
	private String cardNumber;
	private String cardName;
	private CardType cardType;
	private LocalDate requestDate;
	private LocalDate expirationDate;
}