package com.woojungcard.woojungcard.domain.response;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter 
@Setter
public class UserInfoResponse {
	private String    userId;
	private String    userName;
	private LocalDate userBirth;
	private String    userTel;
}
