package com.woojungcard.woojungcard.exception;

public class UserCardAppException extends Exception {
	public UserCardException() {
		super("신청이 실패하였습니다. 다시 시도해주세요.");
	}

}
