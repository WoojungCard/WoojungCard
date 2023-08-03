package com.woojungcard.woojungcard.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class UserCardUsageHistoryRequest {
	private Long id;
	private String cardNumber;
	private String yearChoice;
	private String monthChoice;
}
