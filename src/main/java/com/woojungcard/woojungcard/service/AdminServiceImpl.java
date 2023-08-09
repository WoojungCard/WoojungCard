package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.woojungcard.woojungcard.domain.request.AdminDateRequest;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisBusinessTypeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisDailyResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisGenderAgeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisTotalSalesResponse;
import com.woojungcard.woojungcard.domain.response.CardAppStatusResponse;
import com.woojungcard.woojungcard.repository.AdminRepository;
import com.woojungcard.woojungcard.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AdminServiceImpl implements AdminService {
	
	private final AdminRepository adminRepository;
	private final UserRepository  userRepository;

	// 성/연령별 월별 소비현황
	@Override
	@Transactional
	public List<AdminAnalysisGenderAgeResponse> genderAgeGroup(AdminDateRequest chooseDate) {
		return adminRepository.genderAgeGroup(chooseDate);
	}

	// 업종별 카드 소비현황
	@Override
	@Transactional
	public List<AdminAnalysisBusinessTypeResponse> businessTypeGroup(AdminDateRequest chooseDate) throws Exception {
		return adminRepository.businessTypeGroup(chooseDate);
	}

	// 일별 카드소비현황
	@Override
	@Transactional
	public List<AdminAnalysisDailyResponse> dailyConsumption() {
		return adminRepository.dailyConsumption();
	}

	// 전체 카드 매출액(전년도와 비교)
	@Override
	@Transactional
	public AdminAnalysisTotalSalesResponse totalSales() {
		return adminRepository.totalSales();
	}

	// 고객별 카드 관리
	@Override
	@Transactional
	public List<CardAppStatusResponse> userCardAppStatus(Long id) {
		return userRepository.userCardAppStatus(id);
	}
	
}