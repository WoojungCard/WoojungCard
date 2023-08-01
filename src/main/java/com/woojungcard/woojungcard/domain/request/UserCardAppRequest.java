package com.woojungcard.woojungcard.domain.request;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class UserCardAppRequest {
	private Long userId;
	private Long cardId;
	private LocalDate requestDate;
}
