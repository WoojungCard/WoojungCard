package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.domain.request.AdminDateRequest;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisBusinessTypeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisDailyResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisGenderAgeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisTotalSalesResponse;

@Repository
@Mapper
public interface AdminRepository {
	
	// 성/연령별 월별 소비현황
	List<AdminAnalysisGenderAgeResponse> genderAgeGroup(AdminDateRequest chooseDate);
	
	// 업종별 카드 소비현황
	List<AdminAnalysisBusinessTypeResponse> businessTypeGroup(AdminDateRequest chooseDate);
	
	// 일별 카드소비현황
	List<AdminAnalysisDailyResponse> dailyConsumption();
	
	// 전체 카드 매출액(전년도와 비교)
	AdminAnalysisTotalSalesResponse totalSales();
}