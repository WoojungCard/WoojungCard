package com.woojungcard.woojungcard.domain.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class AdminAnalysisDailyResponse {
	private Long totalCharge;
	private String paymentDate;
}