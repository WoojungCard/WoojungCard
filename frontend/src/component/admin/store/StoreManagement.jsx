import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeList } from "../../../store/store/storeSlice";

function StoreManagement() {
	const dispatch = useDispatch();
	const {storeListData} = useSelector((state) => state.store);
    const [rawData, setRawData] = useState();
	
	useEffect(() => {
        dispatch(storeList());
    }, []);

    useEffect(() => {
        setRawData(storeListData);
    }, [storeListData]);

    useEffect(() => {
        
    }, [rawData]);
	
    // 상호명 검색
    const searchStore = (e) => {
        if (e.key === "Enter") {
            
        }
    }

    return (
        <div className="container mt-5 pt-4">
            <h4 className="fw-bold text-center">가맹점정보 조회</h4>
            
            <div className="container w-75">
                <div className="d-flex justify-content-end mb-1">
                    <Form>
                        <Form.Group as={Row} className="mb-2 pe-0" controlId="searchUserName">
                            <Form.Label column sm="3" className="px-0 text-end" style={{fontSize: "13px"}}>상호명</Form.Label>
                            <Col>
                                <Form.Control 
                                    size="sm" type="text" className="bg-light"
                                    onKeyPress={searchStore}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>

                <Table hover className="text-center">
                    <thead className="">
                        <tr>
                            <th>No.</th>
                            <th>사업자번호</th>
                            <th>상호</th>
                            <th>대표자</th>
                            <th>업종</th>
                            <th>사업개시일</th>
                            <th>연락처</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storeListData.map((item, index) => {
                                index = index + 1;
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.businessNumber}</td>
                                        <td>{item.storeName}</td>
                                        <td>{item.representative}</td>
                                        <td>{item.businessType}</td>
                                        <td>{item.businessStartDate}</td>
                                        <td>{item.storeTel}</td>
                                        
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

export default StoreManagement;