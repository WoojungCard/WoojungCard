package com.woojungcard.woojungcard.domain.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class StoreDTO {
	private Long id;
	private String businessNumber;
	private String storePwd;
	private String storeName;
	private String representative;
	private String storeAddress;
	private int storeTel;
	private int businessStartDate;
	private String businessType;
	private LocalDate storeJoinDate;
	private String status;
	
}
