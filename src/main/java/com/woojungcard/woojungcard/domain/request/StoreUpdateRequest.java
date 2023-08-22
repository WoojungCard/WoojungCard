package com.woojungcard.woojungcard.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class StoreUpdateRequest {
	private Long   id;
	private String representative;
	private String storePwd;
	private String storeZipCode;
	private String storeAddress1;
	private String storeAddress2;
	private String storeTel;
	
}
