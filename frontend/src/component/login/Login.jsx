import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/user/userSlice";
import { storeLogin } from "../../store/user/storeSlice";

// 로그인
function Login() {

	const {loginStatus} = useSelector((state) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [insertLoginId, setInsertLoginId] = useState('');
	const [insertLoginPwd, setInsertLoginPwd] = useState('');
	const [userType, setUserType] = useState('u');
	
//	개인고객, 가맹점 선택하여 로그인
	const handleUserType = (e) => {
		setUserType(e);
		// console.log(e);  // u(개인고객) or s(가맹점) 로 출력됨
	};
	
	const onChangeLoginId = (e) => {
		setInsertLoginId(e.target.value);
	};
	
	const onChangeLoginPwd = (e) => {
		setInsertLoginPwd(e.target.value);
	};

	const loginInfo = ({
		"userId" : insertLoginId,
		"userPwd" : insertLoginPwd
	})
	const loginInfo2 = ({
		"businessNumber" : insertLoginId,
		"storePwd" : insertLoginPwd
	})
	
	const onClickLogin = (e) => {
		e.preventDefault();
		if (userType === 'u') {
			dispatch(userLogin(loginInfo));
			// if (loginStatus === "successed") {
				navigate('/user/cardapplication/${2}');
			// } 
		} else if (userType === 's') {
			console.log(loginInfo2);
			dispatch(storeLogin(loginInfo2));
			//	navigate('/storeInfoUpdate')
			//console.log("store Login");
		}
	}; 
	
	return (
		<div>
			<Container className="container d-flex justify-content-center align-items-center" style={{height: "700px"}}>
				
				
				<Form style={{width: "400px"}}>
					
					<Form.Group className="row mb-4" controlId="formRadiobuttonGender">
                        <ToggleButtonGroup type="radio" name="userType" defaultValue="u" value={userType} onChange={handleUserType}>
					        <ToggleButton  variant="outline-dark" id="tbg-radio-1" value="u">
					          개인 고객
					        </ToggleButton>
					        <ToggleButton variant="outline-dark" id="tbg-radio-2" value="s">
					          가맹점
					        </ToggleButton>
				        </ToggleButtonGroup>
                    </Form.Group>
					
					<Form.Group className="mb-3" controlId="formPlaintextUserId">
						<Col sm>
                            <Form.Control
                                type="text" placeholder="아이디"
                                onChange={onChangeLoginId}
                                className="mb-3"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control
                                type="password" placeholder="비밀번호"
                                onChange={onChangeLoginPwd}
                            />
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-flex justify-content-between">
                    	<Button className="px-3" variant="outline-dark" onClick={onClickLogin}>로그인</Button>
                    	<Link to="/join">
                    		<Button className="px-3" variant="outline-dark">회원가입</Button>
                    	</Link>
                    	
                    </div>
                </Form>
                        
            </Container>
		</div>

	);
}

export default Login;