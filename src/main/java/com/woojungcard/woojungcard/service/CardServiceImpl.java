package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.woojungcard.woojungcard.domain.request.UserCardApproveRequest;
import com.woojungcard.woojungcard.domain.request.UserCardListSearchRequest;
import com.woojungcard.woojungcard.domain.request.UserCardUsageHistoryRequest;
import com.woojungcard.woojungcard.domain.request.UserPayBillHistoryRequest;
import com.woojungcard.woojungcard.domain.request.UserPayCardBillRequest;
import com.woojungcard.woojungcard.domain.enums.PayerType;
import com.woojungcard.woojungcard.domain.enums.PaymentState;
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
import com.woojungcard.woojungcard.jwt.JwtService;
import com.woojungcard.woojungcard.repository.CardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CardServiceImpl implements CardService {
	
	private final CardRepository cardRepository;
	private final JwtService 	 jwtService;
	
	// Card Application
	@Transactional
	public CardApplicationResponse cardApplication(Long id) {
		CardApplicationResponse response = cardRepository.cardApplication(id);
		return response;
	}
	
	// Card All List
	@Transactional
	public List<CardListResponse> cardList() {
		return cardRepository.cardList();
	}
	
	// User Card Application History
	@Transactional
	public List<UserCardAppHistoryResponse> cardAppHistory() {
		return cardRepository.cardAppHistory();
	}
	
	// User Card Application Approve
	@Transactional
	public ResponseEntity<String> userCardAppAprove(UserCardApproveRequest request) throws UserCardApproveException {
		StringBuilder cardNumber = new StringBuilder();
        for (int i = 0; i < 16; i++) {
              int randomDigit = (int) (Math.random() * 10);
            cardNumber.append(randomDigit);
            if ((i + 1) % 4 == 0 && i < 15) {
            	cardNumber.append("-");
            }
        }
        
        request.setCardNumber(cardNumber.toString());
		Integer updateRow = cardRepository.userCardAppAprove(request);
		if(updateRow != 0) {
			Integer addRow = cardRepository.insertCardApplicationApproval(request.getId());
			if (addRow != 0) {
				return new ResponseEntity<>("승인 완료", HttpStatus.OK);
			} else {
				throw new UserCardApproveException();
			}
		} else {
			throw new UserCardApproveException();
		}
	}
	@Transactional
	public ResponseEntity<String> userCardAppAprove(UserCardListSearchRequest request) throws UserCardApproveException {
		StringBuilder cardNumber = new StringBuilder();
        for (int i = 0; i < 16; i++) {
              int randomDigit = (int) (Math.random() * 10);
            cardNumber.append(randomDigit);
            if ((i + 1) % 4 == 0 && i < 15) {
            	cardNumber.append("-");
            }
        }
        
        request.setCardNumber(cardNumber.toString());
		Integer updateRow = cardRepository.userCardAppAprove(request);
		if(updateRow != 0) {
			Integer addRow = cardRepository.insertCardApplicationApproval(request.getId());
			if (addRow != 0) {
				return new ResponseEntity<>("승인 완료", HttpStatus.OK);
			} else {
				throw new UserCardApproveException();
			}
		} else {
			throw new UserCardApproveException();
		}
	}
	
	
	
	// User Card Canceled Application
	@Transactional
	public ResponseEntity<String> userCardCancelApp(Long id) throws ApplicationException {
		Integer updateRow = cardRepository.userCardCancelApp(id);
		if (updateRow != 0) {
			Integer insertRow = cardRepository.userCardCanceledAdd(id);
			if (insertRow != 0) {
				return new ResponseEntity<>("신청이 완료되었습니다.", HttpStatus.OK);
			} else {
				throw new ApplicationException();
			}
		} else {
			throw new ApplicationException();
		}
	}
	
	// User Card Cancel Application History
	@Transactional
	public List<CardCancelHistoryResponse> userCardCancelHistory() {
		return cardRepository.userCardCancelHistory();
	}
	
	// User Card Cancel Approve
	@Transactional
	public ResponseEntity<String> userCardCancelApprove(Long id) throws UpdateException {
		Integer updateRow = cardRepository.userCardCancelApprove(id);
		if (updateRow != 0) {
			Integer addRow = cardRepository.addUserCardCancelDate(id);
			if (addRow != 0) {
				return new ResponseEntity<>("승인이 완료되었습니다.", HttpStatus.OK);
			} else {
				throw new UpdateException();
			}
		} else {
			throw new UpdateException();
		}
	}
	
	// User Card Possession History
	@Transactional
	public List<UserCardPossessionResponse> userCardPossessionHistory() {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		return cardRepository.userCardPossessionHistory(id);
	}
	
	// User Card Usage History
	@Transactional
	public List<UserCardUsageHistoryResponse> userCardUsageHistory(UserCardUsageHistoryRequest request) {
		Long id = jwtService.tokenToDTO(jwtService.getAccessToken()).getId();
		request.setId(id);
		return cardRepository.userCardUsageHistory(request);
	}
	
	// User Pay Card Bill
	@Transactional
	public ResponseEntity<String> userPayCardBill(UserPayCardBillRequest request) throws PayBillException {
		request.setPayer(PayerType.USER);
		request.setPaymentState(PaymentState.FULL);
		Integer insertRow = cardRepository.userPayCardBill(request);
		if (insertRow != 0) {
			return new ResponseEntity<>("납부 완료되었습니다.", HttpStatus.OK);
		} else {
			throw new PayBillException();
		}
	}
	
	// User Pay Bill History
	@Transactional
	public Long userPayBillHistory(UserPayBillHistoryRequest request) {
		return cardRepository.userPayBillHistory(request);
	}
	
	// Find Card Type By Id
	@Transactional
	public String findCardTypeById(Long id) {
		return cardRepository.findCardTypeById(id);
	}
}
