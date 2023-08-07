package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.request.AdminDateRequest;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisBusinessTypeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisDailyResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisGenderAgeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisTotalSalesResponse;
import com.woojungcard.woojungcard.domain.response.CardAppStatusResponse;
import com.woojungcard.woojungcard.service.AdminService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {
	
	private final AdminService adminService;
	
	// 성/연령별 월별 소비현황
	@PutMapping("/getGenderAgeData")
	public List<AdminAnalysisGenderAgeResponse> genderAgeGroup(@RequestBody AdminDateRequest chooseDate) throws Exception {
		return adminService.genderAgeGroup(chooseDate);
	}
	
	// 업종별 카드 소비현황
	@PutMapping("/getBusinessTypeData")
	public List<AdminAnalysisBusinessTypeResponse> businessTypeGroup(@RequestBody AdminDateRequest chooseDate) throws Exception {
		return adminService.businessTypeGroup(chooseDate);
	}
	
	// 일별 카드소비현황
	@GetMapping("/getDailyData")
	public List<AdminAnalysisDailyResponse> dailyConsumption() {
		return adminService.dailyConsumption();
	}
	
	// 전체 카드 매출액(전년도와 비교)
	@GetMapping("/getTotalData")
	public AdminAnalysisTotalSalesResponse totalSales() {
		return adminService.totalSales();
	}
	
	// 고객별 카드 목록
	@PostMapping("/getUserCardData")
	public List<CardAppStatusResponse> userCardAppStatus(@RequestBody Long id) {
		return adminService.userCardAppStatus(id);
	}
}