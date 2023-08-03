import { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userCardPossessionHistory, userCardUsageHistory } from "../../store/card/cardSlice";
import { number } from "prop-types";


function UserCardUsageHistory() {

    const {cardPossessionList, cardUsageHistory} = useSelector((state) => state.card);

    const dispatch = useDispatch();

    const [request, setRequest] = useState({
        "cardNumber" : "",
        "yearChoice" : "",
        "monthChoice" : ""
    })

    useEffect(()=>{
        dispatch(userCardPossessionHistory());
    }, [])

    const onChangeHandler = (e)=>{
        const {name, value} = e.target;
        setRequest({...request, [name] : value});
    }

    useEffect(()=>{
        dispatch(userCardUsageHistory(request));
    },[request]);

    return (
        <div className="container mt-5 pt-4">
            <h4 className="fw-bold text-center">카드사용내역</h4>
            
            <div className="container w-75">
            <div className="d-flex justify-content-start mb-1">
                    <Form>
                        <Form.Group as={Row} className="mb-2 pe-0 w-20" controlId="choiceCardNumber">
                            <Form.Label column sm="3" className="px-0 text-end" style={{fontSize: "13px"}}>카드번호</Form.Label>
                                <Col> 
                                    <Form.Select column sm="3" className="px-0 text-center" onChange={onChangeHandler} name="cardNumber" style={{fontSize: "13px", width: "200px"}}>
                                        <option>카드를 선택해주세요.</option>
                                        {cardPossessionList?.map((el) => 
                                        <option value={el} >{el}</option>
                                        )}
                                    </Form.Select>  
                                </Col>
                        </Form.Group>
                    </Form>
                </div>

                <div className="d-flex justify-content-end mb-1">
                    <Form>
                        <Form.Group as={Row} className="mb-2 pe-0" controlId="choiceYear">
                            <Form.Label column sm="3" className="px-0 text-end w-40" style={{fontSize: "13px"}}>년도</Form.Label>
                            <Col>
                                <Form.Select column sm="3" className="px-0 text-center" onChange={onChangeHandler} name="yearChoice" style={{fontSize: "13px", width: "100px"}}>
                                    <option>2023</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                </Form.Select>  
                            </Col>
                        </Form.Group>  
                        <Form.Group as={Row} className="mb-2 pe-0" controlId="choice">
                            <Form.Label column sm="3" className="px-0 text-end" style={{fontSize: "13px"}}>월</Form.Label>
                            <Col>
                                <Form.Select column sm="3" className="px-0 text-center" onChange={onChangeHandler} name="monthChoice" style={{fontSize: "13px", width: "100px"}}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </Form.Select> 
                            </Col>
                        </Form.Group> 
                    </Form>
                </div>

                <Table hover className="text-center">
                    <thead className="">
                        <tr>
                            <th>일자</th>
                            <th>승인번호</th>
                            <th>사업자번호</th>
                            <th>가맹점명</th>
                            <th>업종</th>
                            <th>할부</th>
                            <th>카드청구액</th>
                            <th>할부이자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardUsageHistory?.map((el) => 
                        <tr>
                            <td>{el.paymentDate}</td>
                            <td>{el.approvalNumber}</td>
                            <td>{el.businessNumber}</td> 
                            <td>{el.storeName}</td>
                            <td>{el.businessType}</td>
                            <td>{el.installment === 0 ? "일시불" : "할부"}</td>
                            <td>{el.cardCharge}</td>
                            <td>{el.interestBee}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>

                <div className="d-flex justify-content-end">
                    <div className="row">
                        <div className="col" style={{width: "100px"}}>
                            <p className="">건수 : {cardUsageHistory?.length}</p>
                        </div>
                        <div className="col" style={{width: "100px"}}>
                            <p className="">{cardUsageHistory?.reduce((sum, currValue) => sum + currValue.cardCharge, 0)}</p>
                        </div>
                        <div className="col" style={{width: "100px"}}>
                            <p className="">{cardUsageHistory?.reduce((sum, currValue) => sum + currValue.interestBee, 0)}</p>
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        </div>
    )
}
export default UserCardUsageHistory;