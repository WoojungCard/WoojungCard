package com.woojungcard.woojungcard.domain.entity;

import java.time.LocalDate;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;

import com.woojungcard.woojungcard.domain.request.SignUpRequest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
	private Long id;
	private String userId;
	private String userPwd;
	private String userName;
	private LocalDate userBirth;
	private String userGender;
	private String userTel;
	private LocalDate userJoinDate;
}
