package com.woojungcard.woojungcard.service;

import java.util.List;

import com.woojungcard.woojungcard.domain.request.AdminDateRequest;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisBusinessTypeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisGenderAgeResponse;

public interface AdminService {
	public List<AdminAnalysisGenderAgeResponse> genderAgeGroup(AdminDateRequest chooseDate) throws Exception;
	
	public List<AdminAnalysisBusinessTypeResponse> businessTypeGroup(AdminDateRequest chooseDate) throws Exception;
}
