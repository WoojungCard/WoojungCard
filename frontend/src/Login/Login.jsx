import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// 로그인
function Login() {
	return (
		<div>
			<Container className="container d-flex justify-content-center align-items-center" style={{height: "800px"}}>
				<Form className="w-50">
					<Form.Group as="Row" className="mb-3" controlId="formPlaintextUserId">
						<Col sm>
                            <Form.Control
                                type="text" placeholder="UserID"
                                onChange=""
                                value=""
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as="Row" className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control
                                type="password" placeholder="Password"
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