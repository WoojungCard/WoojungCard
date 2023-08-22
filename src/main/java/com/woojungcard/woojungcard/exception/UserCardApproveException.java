package com.woojungcard.woojungcard.exception;

public class UserCardApproveException extends Exception {
	public UserCardApproveException() {
		super("실패하였습니다. 다시 시도해주세요");
	}

}
