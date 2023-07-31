import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function UserManagementDetail() {

    const location = useLocation();
    const index = location.state.index;
    
    const dispatch = useDispatch();
    const {userListData} = useSelector((state) => state.user);
    const userData = userListData[index];
    // console.log(userData);


    return (
        <div className="container mt-5 pt-4">
            <div className="container w-75">
                <h5 className="fw-bold text-start mb-4">"{userData.userName}"님 카드 내역 조회</h5>

                <Table hover className="text-center">
                    <thead className="">
                        <tr>
                            <th>No.</th>
                            <th>카드상품</th>
                            <th>카드번호</th>
                            <th>신용/체크</th>
                            <th>신청일</th>
                            <th>만료일</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>청년혜택카드</td>
                            <td>5107-4135-5135-2425</td>
                            <td>체크카드</td>
                            <td>2023-07-17</td>
                            <td>2023-07-16</td>
                            <td>유효</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default UserManagementDetail;