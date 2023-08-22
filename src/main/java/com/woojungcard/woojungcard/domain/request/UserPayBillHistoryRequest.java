package com.woojungcard.woojungcard.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class UserPayBillHistoryRequest {
	private Long    cardIssuedId;
	private Integer targetYear;
	private Integer targetMonth;
}
