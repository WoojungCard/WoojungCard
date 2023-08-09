package com.woojungcard.woojungcard.domain.response;

import com.woojungcard.woojungcard.domain.enums.CardType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class CardApplicationResponse {
	private String   cardName;
	private CardType cardType;
}
