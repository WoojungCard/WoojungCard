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
	private int id;
	private int cardIssuedId;
	private int storeId;
	private int approvalNumber;
	private Date paymentDate;
	private int installment;
	private int cardCharge;
}