package com.woojungcard.woojungcard.domain.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class StoreAppInfoResponse {
	private Long id;
	private String businessNumber;
	private String representative;
	private String storeName;
	private String businessType;
	private String storeZipCode;
	private String storeAddress1;
	private String storeAddress2;
	private String businessStartDate;
	private String storeTel;
	private String storeJoinDate;
}
