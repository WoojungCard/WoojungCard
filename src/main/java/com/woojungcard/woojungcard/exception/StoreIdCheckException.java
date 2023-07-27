package com.woojungcard.woojungcard.exception;

public class StoreIdCheckException extends Exception {
	public StoreIdCheckException() {
		super("이미 등록된 아이디입니다.");
	}
}
