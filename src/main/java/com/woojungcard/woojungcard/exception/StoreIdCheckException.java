package com.woojungcard.woojungcard.exception;

public class StoreIdCheckException extends Exception {
	public StoreIdCheckException() {
		super("이미 등록된 사업자번호입니다.");
	}
}
