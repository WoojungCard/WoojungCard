import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cardList } from "../../../store/card/cardSlice";

function CardManage() {

    const dispatch = useDispatch();
    const {cardListData} = useSelector((state) => state.card);

    useEffect(() => {
        dispatch(cardList());
    }, []);

    // 카드명 검색
    const searchCard = (e) => {
        if (e.key === "Enter") {
            
        }
    }

    return (
        <div className="container mt-5 pt-4">
            <h4 className="fw-bold text-center">카드상품 관리</h4>
            
            <div className="container w-75">
                <div className="d-flex justify-content-end mb-1">
                    <div className="col mb-3">
                        <Link to={"/admin/cardNew"}>
                            <Button type="button" variant="outline-dark" className="mx-2 py-0">등록</Button>
                        </Link>
                    </div>
                    
                    <Form>
                        <Form.Group as={Row} className="mb-2 pe-0" controlId="searchUserName">
                            <Form.Label column sm="3" className="px-0 text-end" style={{fontSize: "13px"}}>카드명</Form.Label>
                            <Col>
                                <Form.Control 
                                    size="sm" type="text" className="bg-light"
                                    onKeyPress={searchCard}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>

                <Table hover className="text-center">
                    <thead className="">
                        <tr>
                            <th>No.</th>
                            <th>카드명</th>
                            <th>신용/체크</th>
                            <th>Info.</th>
                            <th>등록일</th>
                            <th>가입자 수</th>
                            <th>비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cardListData.map((item, index) => {
                                index = index + 1;
                                return (
                                    <tr key={index}>
                                        <th>{index}</th>
                                        <th>
                                            <Link to={`/admin/cardManageDetail/${index}`} 
                                                state={{index: `${(index - 1)}`}} 
                                                style={{textDecoration: "none", color: "black"}}>
                                                    {item.cardName}
                                            </Link>
                                        </th>
                                        <th>{item.cardType}</th>
                                        <th>{item.cardInfo}</th>
                                        <th>{item.registerDate}</th>
                                        <th>{item.count}</th>
                                        <th>{item.state}</th>
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

export default CardManage;