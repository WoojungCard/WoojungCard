package com.woojungcard.woojungcard.domain.request;

import java.time.LocalDate;

import com.woojungcard.woojungcard.domain.enums.PayerType;
import com.woojungcard.woojungcard.domain.enums.PaymentState;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class UserPayCardBillRequest {
	private PayerType 	 payer;
	private Long 		 targetId;
	private Integer 	 targetYear;
	private Integer 	 targetMonth;
	private Long 		 payment;
	private PaymentState paymentState;
}
