package com.woojungcard.woojungcard.domain.request;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class UserPaymentRequest {
	private int cardIssuedId;
	private int storeId;
	private int approvalNumber;
	private int installment;
	private int cardCharge;
}
