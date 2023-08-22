package com.woojungcard.woojungcard.exception;

public class LoginException extends Exception {
	public LoginException() {
		super("입력한 정보가 잘못되었습니다. 다시 시도해주세요.");
	}

}
