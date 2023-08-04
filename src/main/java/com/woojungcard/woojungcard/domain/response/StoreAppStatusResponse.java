package com.woojungcard.woojungcard.domain.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class StoreAppStatusResponse {
	private String businessNumber;
	private String representative;
	private String storeName;
	private String businessType;
	private String storeZipCode;
	private String storeAddress1;
	private String storeAddress2;
	private int businessStartDate;
	private int storeTel;
	private String status;
}
