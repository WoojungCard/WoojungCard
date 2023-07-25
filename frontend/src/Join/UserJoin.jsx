import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

// 개인고객 회원가입
function UserJoin() {
	const [insertUserId, setInsertUserId] = useState('');
	const [insertUserPwd, setInsertUserPwd] = useState('');
	const [insertUserName, setInsertUserName] = useState('');
	const [insertUserBirth, setInsertUserBirth] = useState('');
	const [insertUserTel, setInsertUserTel] = useState('');
	
	const [gender, setGender] = useState('');
	
//	성별 선택
	const handleGender = (e) => {
		setGender(e);
//		console.log(e);  // M or F 로 출력됨
	};
	
	const onChangeinputUserId = (e) => {
		setInsertUserId(e.target.value);
	};
	
	const onChangeinputUserPwd = (e) => {
		setInsertUserPwd(e.target.value);
	};
	
	const onChangeinputUserName = (e) => {
		setInsertUserName(e.target.value);
	};
	
	const onChangeinputUserBirth = (e) => {
		setInsertUserBirth(e.target.value);
		console.log(e.target.value);
	};
	
	const onChangeinputUserTel = (e) => {
		setInsertUserTel(e.target.value);
	};
	
//	개인고객 회원가입 클릭
	const onClickUserJoin = () => {
		
	}
	
	
	return (
		<div className="mt-5 pt-5">
			<Container className="container d-flex justify-content-center my-3">
				<Form style={{width: "500px"}}>
					<h4 className="fw-bold text-center">개인고객 회원가입</h4>
					
					<Form.Group controlId="formPlaintextUserId">
						<Form.Label className="mb-0">아이디</Form.Label>
                        <Form.Control
                            type="text" placeholder="아이디를 입력해주세요."
                            onChange={onChangeinputUserId}
                            className="mb-3"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    	<Form.Label className="mb-0">비밀번호</Form.Label>
                        <Form.Control
                            type="password" placeholder="영문과 숫자를 혼합한 10글자 이상"
                            onChange={onChangeinputUserPwd}
                            className="mb-3"
                        />
                    </Form.Group>
                    
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
                            className="mb-3"
                        />
                    </Form.Group>
                    
                    <Form.Group className="row mb-2" controlId="formRadiobuttonGender">
                        <ToggleButtonGroup type="radio" name="gender" value={gender} onChange={handleGender}>
					        <ToggleButton variant="outline-secondary" id="tbg-radio-1" value="M">
					          남자
					        </ToggleButton>
					        <ToggleButton variant="outline-secondary" id="tbg-radio-2" value="F">
					          여자
					        </ToggleButton>
				        </ToggleButtonGroup>
                    </Form.Group>
			        
			        <Form.Group className="mb-3" controlId="formPlaintextUserTel">
						<Form.Label className="mb-0 ">연락처</Form.Label>
                        <Form.Control
                            type="text" placeholder="010-0000-0000"
                            onChange={onChangeinputUserTel}
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

export default UserJoin;