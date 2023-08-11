package com.woojungcard.woojungcard.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class UserCardListDTO {
	  private int id;
	  private String card_name;
      private String card_number;
}
