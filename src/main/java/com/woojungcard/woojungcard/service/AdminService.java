package com.woojungcard.woojungcard.service;

import java.util.List;

import com.woojungcard.woojungcard.domain.request.AdminDateRequest;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisBusinessTypeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisDailyResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisGenderAgeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisTotalSalesResponse;

public interface AdminService {
	
	// 성/연령별 월별 소비현황
	public List<AdminAnalysisGenderAgeResponse> genderAgeGroup(AdminDateRequest chooseDate) throws Exception;
	
	// 업종별 카드 소비현황
	public List<AdminAnalysisBusinessTypeResponse> businessTypeGroup(AdminDateRequest chooseDate) throws Exception;
	
	// 일별 카드소비현황
	public List<AdminAnalysisDailyResponse> dailyConsumption();
	
	// 전체 카드 매출액(전년도와 비교)
	public AdminAnalysisTotalSalesResponse totalSales();
}
