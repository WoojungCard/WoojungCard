package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.domain.request.UserCardApproveRequest;
import com.woojungcard.woojungcard.domain.response.CardApplicationResponse;
import com.woojungcard.woojungcard.domain.response.CardCancelHistoryResponse;
import com.woojungcard.woojungcard.domain.response.CardListResponse;
import com.woojungcard.woojungcard.domain.response.UserCardAppHistoryResponse;

@Repository
@Mapper
public interface CardRepository {
	CardApplicationResponse cardApplication(Long id);
	
	// Card List
	List<CardListResponse> cardList();
	
	// User Card Application History
	List<UserCardAppHistoryResponse> cardAppHistory();
	
	// User Card Application Approve
	Integer userCardAppAprove(UserCardApproveRequest request);
	
	// User Card Canceled Application
	Integer userCardCancelApp(Long id);
	
	// Card_Canceled Add
	Integer userCardCanceledAdd(Long id);
	
	// Card Cancel Application History
	List<CardCancelHistoryResponse> userCardCancelHistory();
	
	// User Card Cancel Approve
	Integer userCardCancelApprove(Long id);
	
	// User Card Cancel Date Add
	Integer addUserCardCancelDate(Long id);


}
