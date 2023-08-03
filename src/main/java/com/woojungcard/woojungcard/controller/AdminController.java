package com.woojungcard.woojungcard.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woojungcard.woojungcard.domain.request.AdminDateRequest;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisBusinessTypeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisGenderAgeResponse;
import com.woojungcard.woojungcard.service.AdminService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {
	
	private final AdminService adminService;
	
	@PutMapping("/getGenderAgeData")
	public List<AdminAnalysisGenderAgeResponse> genderAgeGroup(@RequestBody AdminDateRequest chooseDate) throws Exception {
		return adminService.genderAgeGroup(chooseDate);
	}
	
	@PutMapping("/getBusinessTypeData")
	public List<AdminAnalysisBusinessTypeResponse> businessTypeGroup(@RequestBody AdminDateRequest chooseDate) throws Exception {
		return adminService.businessTypeGroup(chooseDate);
	}
}