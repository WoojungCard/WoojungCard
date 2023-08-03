package com.woojungcard.woojungcard.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class AdminDateRequest {
	private String paymentMonth;
	private String paymentMonthLastYear;
}