package com.woojungcard.woojungcard.exception;

public class StoreUpdateException extends Exception{
	public StoreUpdateException() {
		super("등록에 실패하였습니다. 다시 시도해주세요");
	}
}
