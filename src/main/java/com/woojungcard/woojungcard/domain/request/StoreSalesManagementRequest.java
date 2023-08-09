package com.woojungcard.woojungcard.domain.request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class StoreSalesManagementRequest {
	private Long storeId;
	private Integer targetYear;
	private Integer targetMonth;
}