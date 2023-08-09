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
public class StoreInfoResponse {
	private Long 	  id;
	private String 	  businessNumber;
	private String 	  storeName;
	private String 	  representative;
	private String 	  storeZipCode;
	private String 	  storeAddress1;
	private String 	  storeAddress2;
	private String 	  storeTel;
	private LocalDate businessStartDate;
	private String 	  businessType;
	private LocalDate storeJoinDate;
	private String 	  status;
	private String 	  auth;

} 