import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import { userGetInfo, userInfoUpdate } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import { phoneNumberAutoFormat } from "../join/UserJoin";

function UserInfoManagement() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userInfo, updateStatus, error} = useSelector((state) => state.user);

    useEffect(() => {dispatch(userGetInfo())}, [])

    const [info, setInfo] = useState({"userPwd" : "",
                                      "userTel" : ""})

    useEffect(() => {setInfo({...info, "userTel" : userInfo.userTel})}, [userInfo])

    //	비밀번호 유효성 검증
	const [pwdAlertOpen, setPwdAlertOpen] = useState(false);
	const handlePwdBlur = (e) => {const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,25}$/
                                  const passwordCurrent = e.target.value;
                                  if   (!passwordRegex.test(passwordCurrent)) {setPwdAlertOpen(true)} 
                                  else {setPwdAlertOpen(false);
                                        setInfo({...info, "userPwd" : passwordCurrent});}};

    const onChangeinputUserTel = (e) => {const targetValue = phoneNumberAutoFormat(e.target.value);  // 하이픈 자동완성
		                                 setInfo({...info, "userTel" : targetValue})};

    //	개인고객 정보 수정
	const onClickUserInfoUpdate = (e) => {e.preventDefault();
                                          dispatch(userInfoUpdate(info));}

    useEffect(() => {if      (updateStatus === "successed")   navigate(0);
                     else if (updateStatus === "failed")      alert(error);
    }, [updateStatus])

    return (
        <div className="mt-5">
            <Container className="container d-flex justify-content-center align-items-center" style={{height: "700px"}}>
                
            
                <Form style={{width: "400px"}}>
                    <h4 className="fw-bold text-center">회원정보수정</h4>

                    <Form.Group controlId="formPlaintextUserId">
                        <Form.Label className="mb-0 ">아이디</Form.Label>
                        <Form.Control
                            type="text" 
                            readOnly
                            className="mb-3 bg-light"
                            defaultValue={userInfo.userId}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label className="mb-0">비밀번호</Form.Label>
                        <Form.Control
                            type="password" 
                            placeholder="변경할 비밀번호를 입력하세요"
                            onBlur={handlePwdBlur}
                            className="mb-3"
                        />
                    </Form.Group>

                    {pwdAlertOpen && (
                        <p className="mb-1 text-danger" style={{ marginTop: "-12px", fontSize: "13px" }}>
                            &#8226; 10~25자의 영문 소문자, 숫자를 사용해 주세요.
                        </p>
                    )}
                    
                    <Form.Group className="mb-3" controlId="formPlaintextUserName">
                        <Form.Label className="mb-0 ">이름</Form.Label>
                        <Form.Control
                            type="text" 
                            readOnly           
                            className="mb-3 bg-light"
                            defaultValue={userInfo.userName}
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPlaintextUserBirth">
                        <Form.Label className="mb-0 ">생년월일</Form.Label>
                        <Form.Control
                            type="text"
                            readOnly           
                            className="mb-3 bg-light"
                            defaultValue={userInfo.userBirth}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaintextUserTel">
                        <Form.Label className="mb-0 ">연락처</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={onChangeinputUserTel}
                            maxLength={13}
                            defaultValue={userInfo.userTel}
                            className="mb-4"
                        />
                    </Form.Group>

                    <div className="d-grid gap-1">
                        <Button className="px-3" variant="outline-dark" onClick={onClickUserInfoUpdate}>수정하기</Button>
                    </div>
                    
                </Form>

            </Container>
        </div>
    );
}

export default UserInfoManagement;