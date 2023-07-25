package com.woojungcard.woojungcard.exception;

public class IdCheckException extends Exception {
	public IdCheckException() {
		super("이미 등록된 아이디입니다.");
	}

}
