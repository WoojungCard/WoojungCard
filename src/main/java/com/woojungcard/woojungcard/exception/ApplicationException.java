package com.woojungcard.woojungcard.exception;

public class ApplicationException extends Exception {
	public ApplicationException() {
		super("신청이 실패하였습니다. 다시 시도해주세요.");
	}

}
