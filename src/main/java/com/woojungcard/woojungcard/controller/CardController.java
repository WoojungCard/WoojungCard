package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.request.UserCardApproveRequest;
import com.woojungcard.woojungcard.domain.request.UserCardUsageHistoryRequest;
import com.woojungcard.woojungcard.domain.request.UserPayBillHistoryRequest;
import com.woojungcard.woojungcard.domain.request.UserPayCardBillRequest;
import com.woojungcard.woojungcard.domain.dto.CardProductDTO;
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
import com.woojungcard.woojungcard.repository.CardRepository;
import com.woojungcard.woojungcard.service.CardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/card")
public class CardController {
	
	private final CardService cardService;
	
	// All Card List
	@GetMapping("/list")
	public List<CardListResponse> cardList() {
		return cardService.cardList();
	}
	
	// User Card Application Info
	@GetMapping("/getInfo/{id}")
	public CardApplicationResponse cardApplication(@PathVariable("id") Long id) {
		return cardService.cardApplication(id);
	}
	
	// User Card Application History
	@GetMapping("/appHistory")
	public List<UserCardAppHistoryResponse> cardAppHistory() {
		return cardService.cardAppHistory();
	}
	
	// User Card Application Approve
	@PutMapping("/approve")
	public ResponseEntity<String> userCardAppAprove(@RequestBody UserCardApproveRequest request) throws UserCardApproveException {
		return cardService.userCardAppAprove(request);
	}
	
	 
	// User Card Cancel Application
	@PutMapping("/cancelApp")
	public ResponseEntity<String> userCardCancelApp(@RequestBody Long id) throws ApplicationException {
		return cardService.userCardCancelApp(id);
	}

	// User Card Cancel Application History
	@GetMapping("/cancelAppHistory")
	public List<CardCancelHistoryResponse> userCardCancelHistory() {
		return cardService.userCardCancelHistory();
	}
	
	// User Card Cancel Approve
	@PutMapping("/cancelApprove")
	public ResponseEntity<String> userCardCancelApprove(@RequestBody Long id) throws UpdateException {
		return cardService.userCardCancelApprove(id);
	}
	
	// User Card Possession History
	@GetMapping("/userCardPossession")
	public List<UserCardPossessionResponse> userCardPossessionHistory() {
		return cardService.userCardPossessionHistory();
	}
	
	// User Card Usage History
	@PostMapping("/userUsageHistory")
	public List<UserCardUsageHistoryResponse> userCardUsageHistory(@RequestBody UserCardUsageHistoryRequest request) {
		return cardService.userCardUsageHistory(request);
	}	
	
	// User Pay Card Bill
	@PostMapping("/userPayCardBill")
	public ResponseEntity<String> userPayCardBill(@RequestBody UserPayCardBillRequest request) throws PayBillException {
		return cardService.userPayCardBill(request);
	}
	
	// User Pay Bill History
	@PostMapping("/userPayBillHistory")
	public Long userPayBillHistory(@RequestBody UserPayBillHistoryRequest request) {
		return cardService.userPayBillHistory(request);
	}
}
