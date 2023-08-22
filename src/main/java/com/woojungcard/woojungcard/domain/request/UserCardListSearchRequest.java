package com.woojungcard.woojungcard.domain.request;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class UserCardListSearchRequest {
	private Long id;
	private String approvalNumber;
}
//The method setCardNumber(String) is undefined for the type UserCardListSearchRequest