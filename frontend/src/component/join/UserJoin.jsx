import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useDispatch, useSelector } from "react-redux";
import { userIdCheck, userSignUp } from "../../store/user/userSlice";

// 개인고객 회원가입
function UserJoin() {

	const { idCheckResult } = useSelector((state) => state.user);

	const dispatch = useDispatch();

	const [insertUserId, setInsertUserId] = useState('');
	const [insertUserPwd, setInsertUserPwd] = useState('');
	const [insertUserName, setInsertUserName] = useState('');
	const [insertUserBirth, setInsertUserBirth] = useState('');
	const [insertUserTel, setInsertUserTel] = useState('');
	
	const [gender, setGender] = useState('');
	
//	성별 선택
	const handleGender = (e) => {
		setGender(e);
	};
	
	const onChangeinputUserId = (e) => {
		setInsertUserId(e.target.value);
	};
	
//	아이디 입력 input에서 포커스 전환 시 아이디 중복체크
	const [idAlertOpen, setIdAlertOpen] = useState(false);

	useEffect(() => {
		handleIdBlur();
	}, [insertUserId]);

	const handleIdBlur = (e) => {
		dispatch(userIdCheck(insertUserId));
		console.log(insertUserId);
		if(idCheckResult === false){
			setIdAlertOpen(true);  // 중복 아이디일 경우, 알림 메시지 보이게 적용 
		} else {
			setIdAlertOpen(false);
		}
	};
	
//	비밀번호 유효성 검증
	const [pwdAlertOpen, setPwdAlertOpen] = useState(false);
	const handlePwdBlur = (e) => {
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,25}$/
        const passwordCurrent = e.target.value;
        
        if (!passwordRegex.test(passwordCurrent)) {
			setPwdAlertOpen(true);
		} else {
			setPwdAlertOpen(false);
			setInsertUserPwd(passwordCurrent);
		}
	};
		
	const onChangeinputUserName = (e) => {
		setInsertUserName(e.target.value);
	};
	
	const onChangeinputUserTel = (e) => {
		const targetValue = phoneNumberAutoFormat(e.target.value);  // 하이픈 자동완성
		setInsertUserTel(targetValue);
	};

	const onChangeinputUserBirth = (e) => {
		const targetValue = birthAutoFormat(e.target.value);
		setInsertUserBirth(targetValue);
	}

	const user = ({
		"userId" : insertUserId,
		"userPwd" : insertUserPwd,
		"userName" : insertUserName,
		"userBirth" : insertUserBirth,
		"userGender" : gender,
		"userTel" : insertUserTel
	})
	
//	개인고객 회원가입 클릭
	const onClickUserJoin = (e) => {
		e.preventDefault();
		console.log(user);
		dispatch(userSignUp(user));
	}
	
	
	return (
		<div className="mt-5 pt-5">
			<Container className="container d-flex justify-content-center my-3">
				<Form style={{width: "500px"}}>
					<h4 className="fw-bold text-center">개인고객 회원가입</h4>
					
					<Form.Group controlId="formPlaintextUserId">
						<Form.Label className="mb-0">아이디</Form.Label>
                        <Form.Control
                            type="text" placeholder="아이디를 입력하세요"
                            onChange={onChangeinputUserId}
                            onBlur={handleIdBlur}
                            className="mb-3"
                        />
                    </Form.Group>
                    
                    {idAlertOpen && <p className="mb-1 text-danger" style={{marginTop: "-12px", fontSize: "13px"}}>&#8226; 사용할 수 없는 아이디입니다. 다른 아이디를 입력해 주세요.</p>}

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    	<Form.Label className="mb-0">비밀번호</Form.Label>
                        <Form.Control
                            type="password" placeholder="비밀번호를 입력하세요"
                            maxLength={25}
                            onBlur={handlePwdBlur}
                            className="mb-3"
                        />
                    </Form.Group>
                    
                    {pwdAlertOpen && <p className="mb-1 text-danger" style={{marginTop: "-12px", fontSize: "13px"}}>&#8226; 10~25자의 영문 소문자, 숫자를 사용해 주세요.</p>}
                    
                    <Form.Group className="mb-3" controlId="formPlaintextUserName">
						<Form.Label className="mb-0 ">이름</Form.Label>
                        <Form.Control
                            type="text" placeholder="홍길동"
                            onChange={onChangeinputUserName}
                            className="mb-3"
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPlaintextUserBirth">
						<Form.Label className="mb-0 ">생년월일</Form.Label>
                        <Form.Control
                            type="text" placeholder="생년월일 8자리"
                            onChange={onChangeinputUserBirth}
                            maxLength={10}
							value ={insertUserBirth}
                            className="mb-3"
                        />
                    </Form.Group>
                    
                    <Form.Group className="row mb-2" controlId="formRadiobuttonGender">
                        <ToggleButtonGroup type="radio" name="gender" value={gender} onChange={handleGender}>
					        <ToggleButton variant="outline-secondary" id="tbg-radio-1" value="MAN">
					          남자
					        </ToggleButton>
					        <ToggleButton variant="outline-secondary" id="tbg-radio-2" value="WOMAN">
					          여자
					        </ToggleButton>
				        </ToggleButtonGroup>
                    </Form.Group>
			        
			        <Form.Group className="mb-3" controlId="formPlaintextUserTel">
						<Form.Label className="mb-0 ">연락처</Form.Label>
                        <Form.Control
                            type="text" placeholder="연락처를 입력하세요"
                            onChange={onChangeinputUserTel}
                            maxLength={13}
                            value={insertUserTel}
                            className="mb-4"
                        />
                    </Form.Group>

                    <div className="d-grid gap-1">
                        <Button className="px-3" variant="outline-dark" onClick={onClickUserJoin}>가입하기</Button>
                    </div>
                </Form>
                        
            </Container>
		</div>

	);
}

// 연락처 입력시 하이픈 자동완성
export function phoneNumberAutoFormat(phoneNumber) {
  const number = phoneNumber.trim().replace(/[^0-9]/g, "");

  if (number.length < 4) return number;
  if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
  if (number.length < 11) return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
  return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
}

// 생년월일 입력시 하이픈 자동완성
export function birthAutoFormat(birth) {
	const number = birth.trim().replace(/[^0-9]/g, "");
  
	if (number.length < 5) return number;
	if (number.length < 7) return number.replace(/(\d{4})(\d{1})/, "$1-$2");
	if (number.length < 10) return number.replace(/(\d{4})(\d{2})(\d{1})/, "$1-$2-$3");
	return number.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
}

export default UserJoin;