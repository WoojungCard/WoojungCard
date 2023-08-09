package com.woojungcard.woojungcard.domain.response;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class UserCardUsageHistoryResponse {
	private LocalDate paymentDate;
	private Long 	  approvalNumber;
	private String    businessNumber;
	private String    storeName;
	private String    businessType;
	private Long      installment;
	private String    cardCharge;
	private Long      interestBee;
}
