package com.woojungcard.woojungcard.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor 
@NoArgsConstructor
@Getter @Setter
public class UserDTO {
	private Long id;
	private String userId;
	private String userPwd;
	private String userName;
	private LocalDate userBirth;
	private String userGender;
	private String userTel;
	private LocalDate userJoinDate;
}
