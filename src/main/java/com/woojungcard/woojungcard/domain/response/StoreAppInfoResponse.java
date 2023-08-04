package com.woojungcard.woojungcard.domain.response;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class StoreAppInfoResponse {
	private String businessNumber;
	private String representative;
	private String storeName;
	private String businessType;
	private String businessStartDate;
	private String storeTel;
}
