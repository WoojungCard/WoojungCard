import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userList } from "../../../store/user/userSlice";

// 카드사 관리자_고객 관리 목록
function UserManagement() {

    const dispatch = useDispatch();
    const {userListData} = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(userList());
    }, []);

    // 고객명 검색
    const searchUser = (e) => {
        if (e.key === "Enter") {
            
        }
    }

    return (
        <div className="container mt-5 pt-4">
            <h4 className="fw-bold text-center">고객정보 조회</h4>
            
            <div className="container w-75">
                <div className="d-flex justify-content-end mb-1">
                    <Form>
                        <Form.Group as={Row} className="mb-2 pe-0" controlId="searchUserName">
                            <Form.Label column sm="3" className="px-0 text-end" style={{fontSize: "13px"}}>고객명</Form.Label>
                            <Col>
                                <Form.Control 
                                    size="sm" type="text" className="bg-light"
                                    onKeyPress={searchUser}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>

                <Table hover className="text-center">
                    <thead className="">
                        <tr>
                            <th>No.</th>
                            <th>고객명</th>
                            <th>생년월일</th>
                            <th>연락처</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userListData.map((item, index) => {
                                index = index + 1;
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>
                                            <Link to={`/admin/userManagementDetail/${index}`} 
                                                state={{index: `${(index - 1)}`}} 
                                                style={{textDecoration: "none", color: "black"}}>
                                                    {item.userName}
                                            </Link>
                                        </td>
                                        <td>{item.userBirth}</td>
                                        <td>{item.userTel}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default UserManagement;