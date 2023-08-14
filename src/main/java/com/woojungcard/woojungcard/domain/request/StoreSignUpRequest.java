package com.woojungcard.woojungcard.domain.request;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class StoreSignUpRequest {
	private String    businessNumber;
	private String    storePwd;
	private String    representative;
	private String    storeName;
	private String    storeZipCode;
	private String    storeAddress1;
	private String 	  storeAddress2;
	private String 	  businessType;
	private LocalDate businessStartDate;
	private String    storeTel;
	private String    storeJoinDate;
	private String    state;
	private String    auth;
}
