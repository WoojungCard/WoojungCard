package com.woojungcard.woojungcard.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class StorePaymentRequest {
	private Long 	storeId;
	private Integer targetYear;
	private Integer targetMonth;
	private Long 	payment;
}
