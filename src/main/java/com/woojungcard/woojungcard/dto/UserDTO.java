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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserPwd() {
		return userPwd;
	}
	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public LocalDate getUserBirth() {
		return userBirth;
	}
	public void setUserBirth(LocalDate userBirth) {
		this.userBirth = userBirth;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserGender() {
		return userGender;
	}
	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}
	public String getUserTel() {
		return userTel;
	}
	public void setUserTel(String userTel) {
		this.userTel = userTel;
	}
	public LocalDate getUserJoinDate() {
		return userJoinDate;
	}
	public void setUserJoinDate(LocalDate userJoinDate) {
		this.userJoinDate = userJoinDate;
	}
}
