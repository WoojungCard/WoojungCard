package com.woojungcard.woojungcard.exception;

public class UpdateException extends Exception {
	public UpdateException() {
		super("변경이 실패하였습니다. 다시 시도해주세요.");
	}

}
