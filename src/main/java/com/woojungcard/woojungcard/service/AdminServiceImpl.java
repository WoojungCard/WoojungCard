package com.woojungcard.woojungcard.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.woojungcard.woojungcard.domain.request.AdminDateRequest;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisBusinessTypeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisGenderAgeResponse;
import com.woojungcard.woojungcard.repository.AdminRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
	
	private final AdminRepository adminRepository;

	@Override
	public List<AdminAnalysisGenderAgeResponse> genderAgeGroup(AdminDateRequest chooseDate) {
		return adminRepository.genderAgeGroup(chooseDate);
	}

	@Override
	public List<AdminAnalysisBusinessTypeResponse> businessTypeGroup(AdminDateRequest chooseDate) throws Exception {
		return adminRepository.businessTypeGroup(chooseDate);
	}
	
}