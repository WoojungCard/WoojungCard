package com.woojungcard.woojungcard.domain.response;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class StoreSalesManagementResponse {
	private LocalDate paymentDate;
	private Long 	  approvalNumber;
	private String 	  cardNumber;
	private Integer   installment;
	private Long 	  cardCharge;
}
