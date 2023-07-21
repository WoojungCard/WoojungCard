import React from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// 개인고객 회원가입
function UserJoin() {
	return (
		<div>
			<Container className="container d-flex justify-content-center my-3">
				<Form className="w-50">
					<h5>개인고객 회원가입</h5>
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

                    <div className="d-grid gap-1">
                        <Button className="px-3" variant="outline-dark">가입하기</Button>
                    </div>
                </Form>
                        
            </Container>
		</div>

	);
}

export default UserJoin;