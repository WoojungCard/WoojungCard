import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function StoreAppManagement() {

    // 가맹점 승인
    const onClickApproval = () => {

    };

    return (
        <div className="container mt-5 pt-4">
            <h4 className="fw-bold text-center">가맹점신청내역</h4>
            
            <div className="container mt-4">

                <Table hover className="text-center">
                    <thead className="">
                        <tr>
                            <th>No.</th>
                            <th>사업자번호</th>
                            <th>상호</th>
                            <th>대표자</th>
                            <th>업종</th>
                            <th>사업장주소</th>
                            <th>사업개시일</th>
                            <th>연락처</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <Link to={`/`} 
                                    // state={{index: `${(index - 1)}`}} 
                                    style={{textDecoration: "none", color: "black"}}>
                                        1
                                </Link>
                            </td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>
                                <Button 
                                    className="rounded-pill" 
                                    variant="outline-info" 
                                    size="sm"
                                    onClick={onClickApproval}>
                                        승인
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default StoreAppManagement;