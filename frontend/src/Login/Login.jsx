import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

// 로그인
function Login() {
	return (
		<div>
			<Container className="container d-flex justify-content-center align-items-center" style={{height: "700px"}}>
				
				
				<Form style={{width: "400px"}}>
					
					<Form.Group as="Row" className="row mb-4" controlId="formRadiobuttonGender">
                        <ToggleButtonGroup type="radio" name="userType" defaultValue={1}>
					        <ToggleButton  variant="outline-dark" id="tbg-radio-1" value={1}>
					          개인 고객
					        </ToggleButton>
					        <ToggleButton variant="outline-dark" id="tbg-radio-2" value={2}>
					          가맹점
					        </ToggleButton>
				        </ToggleButtonGroup>
                    </Form.Group>
					
					<Form.Group as="Row" className="mb-3" controlId="formPlaintextUserId">
						<Col sm>
                            <Form.Control
                                type="text" placeholder="아이디"
                                onChange=""
                                value=""
                                className="mb-3"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as="Row" className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control
                                type="password" placeholder="비밀번호"
                                onChange=""
                                value=""
                            />
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-flex justify-content-between">
                    	<Button className="px-3" variant="outline-dark">로그인</Button>
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