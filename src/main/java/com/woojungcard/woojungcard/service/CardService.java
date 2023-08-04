package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.woojungcard.woojungcard.domain.request.UserCardApproveRequest;
import com.woojungcard.woojungcard.domain.request.UserCardUsageHistoryRequest;
import com.woojungcard.woojungcard.domain.request.UserPayBillHistoryRequest;
import com.woojungcard.woojungcard.domain.request.UserPayCardBillRequest;
import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;
import com.woojungcard.woojungcard.domain.response.CardCancelHistoryResponse;
import com.woojungcard.woojungcard.domain.response.CardListResponse;
import com.woojungcard.woojungcard.domain.response.UserCardAppHistoryResponse;
import com.woojungcard.woojungcard.domain.response.UserCardPossessionResponse;
import com.woojungcard.woojungcard.domain.response.UserCardUsageHistoryResponse;
import com.woojungcard.woojungcard.exception.ApplicationException;
import com.woojungcard.woojungcard.exception.PayBillException;
import com.woojungcard.woojungcard.exception.UpdateException;
import com.woojungcard.woojungcard.exception.UserCardApproveException;

public interface CardService {
	public CardApplicationResponse cardApplication(Long id);
	
	// Card All List
	public List<CardListResponse> cardList();
	
	// User Card Application History
	public List<UserCardAppHistoryResponse> cardAppHistory();
	
	// User Card Application Approve
	public ResponseEntity<String> userCardAppAprove(UserCardApproveRequest request) throws UserCardApproveException;
	
	// User Card Canceled Application
	public ResponseEntity<String> userCardCancelApp(Long id) throws ApplicationException;
	
	// User Card Cancel Application History
	public List<CardCancelHistoryResponse> userCardCancelHistory();
	
	// User Card Cancel Approve
	public ResponseEntity<String> userCardCancelApprove(Long id) throws UpdateException;

	// User Card Possession History
	public List<UserCardPossessionResponse> userCardPossessionHistory();
	
	// User Card Usage History
	public List<UserCardUsageHistoryResponse> userCardUsageHistory(UserCardUsageHistoryRequest request);
	
	// User Pay Card Bill
	public ResponseEntity<String> userPayCardBill(UserPayCardBillRequest request) throws PayBillException;
	
	// User Pay Bill History
	public Long userPayBillHistory(UserPayBillHistoryRequest request);
}
