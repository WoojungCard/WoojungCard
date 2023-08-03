package com.woojungcard.woojungcard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.woojungcard.woojungcard.domain.request.AdminDateRequest;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisBusinessTypeResponse;
import com.woojungcard.woojungcard.domain.response.AdminAnalysisGenderAgeResponse;

@Repository
@Mapper
public interface AdminRepository {
	List<AdminAnalysisGenderAgeResponse> genderAgeGroup(AdminDateRequest chooseDate);
	
	List<AdminAnalysisBusinessTypeResponse> businessTypeGroup(AdminDateRequest chooseDate);
}