package com.woojungcard.woojungcard.domain.request;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
public class SignUpRequest {
	private String userId;
	private String userPwd;
	private String userName;
	private LocalDate userBirth;
	private String userGender;
	private String userTel;
}
