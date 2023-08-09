package com.woojungcard.woojungcard.domain.dto;

import java.time.LocalDate;

import com.woojungcard.woojungcard.domain.enums.UserGender;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor 
@NoArgsConstructor
@Getter 
@Setter
public class UserDTO {
	private Long       id;
	private String     userId;
	private String     userPwd;
	private String     userName;
	private LocalDate  userBirth;
	private UserGender userGender;
	private String     userTel;
	private LocalDate  userJoinDate;
}
