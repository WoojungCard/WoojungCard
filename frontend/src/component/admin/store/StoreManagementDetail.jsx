import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function StoreManagementDetail() {

    const dispatch = useDispatch();
    const location = useLocation();

    const index = location.state.index;

    const {storeList} = useSelector((state) => state.user);
    const storeData   = storeList[index];

    return (
        <div className="container mt-5 pt-4">
            <div className="container w-75">
                <h5 className="fw-bold text-start mb-4">
                    <span></span>
                    님 카드 내역 조회
                </h5>

                <Table hover className="text-center">
                    <thead>
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
                    </tbody>
                </Table>
            </div>
        </div> 
    );
}

export default StoreManagementDetail;