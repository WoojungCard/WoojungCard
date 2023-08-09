package com.woojungcard.woojungcard.domain.response;

import com.woojungcard.woojungcard.domain.enums.UserGender;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class AdminAnalysisGenderAgeResponse {
	private Long 	   totalCharge;
	private UserGender userGender;
	private String 	   paymentMonth;
	private String 	   ageGroup;
}
