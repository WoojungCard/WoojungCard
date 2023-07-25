package com.woojungcard.woojungcard.exception;

public class UserIdCheckException extends Exception {
	public UserIdCheckException() {
		super("이미 등록된 아이디입니다.");
	}

}
