import React from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

// 개인고객 회원가입
function UserJoin() {
	return (
		<div className="mt-5 pt-5">
			<Container className="container d-flex justify-content-center my-3">
				<Form style={{width: "500px"}}>
					<h4 className="fw-bold text-center">개인고객 회원가입</h4>
					
					<Form.Group as="Row" controlId="formPlaintextUserId">
						<Form.Label className="mb-0">아이디</Form.Label>
                        <Form.Control
                            type="text" placeholder="아이디를 입력해주세요."
                            onChange=""
                            value=""
                            className="mb-3"
                        />
                    </Form.Group>

                    <Form.Group as="Row" className="mb-3" controlId="formPlaintextPassword">
                    	<Form.Label className="mb-0">비밀번호</Form.Label>
                        <Form.Control
                            type="password" placeholder="영문과 숫자를 혼합한 10글자 이상"
                            onChange=""
                            value=""
                            className="mb-3"
                        />
                    </Form.Group>
                    
                    <Form.Group as="Row" className="mb-3" controlId="formPlaintextUserName">
						<Form.Label className="mb-0 ">이름</Form.Label>
                        <Form.Control
                            type="text" placeholder="홍길동"
                            onChange=""
                            value=""
                            className="mb-3"
                        />
                    </Form.Group>
                    
                    <Form.Group as="Row" className="mb-3" controlId="formPlaintextUserBirth">
						<Form.Label className="mb-0 ">생년월일</Form.Label>
                        <Form.Control
                            type="text" placeholder="생년월일 8자리"
                            onChange=""
                            value=""
                            className="mb-3"
                        />
                    </Form.Group>
                    
                    <Form.Group as="Row" className="row mb-2" controlId="formRadiobuttonGender">
                        <ToggleButtonGroup type="radio" name="gender" >
					        <ToggleButton variant="outline-secondary" id="tbg-radio-1" value={1}>
					          남자
					        </ToggleButton>
					        <ToggleButton variant="outline-secondary" id="tbg-radio-2" value={2}>
					          여자
					        </ToggleButton>
				        </ToggleButtonGroup>
                    </Form.Group>
			        
			        <Form.Group as="Row" className="mb-3" controlId="formPlaintextUserTel">
						<Form.Label className="mb-0 ">연락처</Form.Label>
                        <Form.Control
                            type="text" placeholder="010-0000-0000"
                            onChange=""
                            value=""
                            className="mb-4"
                        />
                    </Form.Group>

                    <div className="d-grid gap-1">
                        <Button className="px-3" variant="outline-dark">가입하기</Button>
                    </div>
                </Form>
                        
            </Container>
		</div>

	);
}

export default UserJoin;