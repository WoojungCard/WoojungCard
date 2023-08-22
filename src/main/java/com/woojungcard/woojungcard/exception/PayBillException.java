package com.woojungcard.woojungcard.exception;

public class PayBillException extends Exception {
	public PayBillException() {
		super("납부 실패하였습니다. 다시 시도해주세요.");
	}

}
