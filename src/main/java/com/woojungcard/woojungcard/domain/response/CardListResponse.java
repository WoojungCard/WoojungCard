package com.woojungcard.woojungcard.domain.response;

import java.time.LocalDate;

import com.woojungcard.woojungcard.domain.enums.CardType;
import com.woojungcard.woojungcard.domain.enums.ProductState;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class CardListResponse {
	private Long 	  	 id;
	private String    	 cardName;
	private CardType  	 cardType;
	private String    	 cardInfo;
	private String       cardImage;
	private LocalDate    registerDate;
	private ProductState state;
	private Long 		 count;
}
