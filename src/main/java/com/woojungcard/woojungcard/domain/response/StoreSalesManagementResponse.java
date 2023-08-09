package com.woojungcard.woojungcard.domain.response;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class StoreSalesManagementResponse {
	private int cardIssuedId;
	private int storeId;
	private int approvalNumber;
	private Date paymentDate;
	private int installment;
	private int cardCharge;
}
