import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-router-dom";

function UserInfoManagement() {

    return (
        <div className="mt-5">
        <Container className="container d-flex justify-content-center align-items-center" style={{height: "700px"}}>
            
            {/* <Form style={{width: "400px"}}>
            <h4 className="fw-bold text-center">개인고객 회원가입</h4>

            <Form.Group controlId="formPlaintextUserId">
                <Form.Label className="mb-0">아이디</Form.Label>
                <Form.Control
                    type="text" placeholder="아이디를 입력하세요"
                    className="mb-3"
                />
            </Form.Group>

                
            </Form> */}

        </Container>
        </div>
    );
}

export default UserInfoManagement;