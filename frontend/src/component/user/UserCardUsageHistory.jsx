import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userCardPossessionHistory, userCardUsageHistory, userPayBillHistory, userPayCardBill } from "../../store/card/cardSlice";
import { useLocation } from "react-router-dom";

function UserCardUsageHistory() {

    const location = useLocation();
    // const cardIssuedId = location.state.cardIssuedId;
    // const cardNumber = location.state.cardNumber;

    const {cardPossessionList, cardUsageHistory, payBillHistory} = useSelector((state) => state.card);

    const dispatch = useDispatch();

    const [request, setRequest] = useState({
        "cardIssuedId" : "",
        "yearChoice" : new Date().getFullYear(),
        "monthChoice" : new Date().getMonth()+1,
    })

    useEffect(() => {
        dispatch(userCardPossessionHistory());
    }, [])

    useEffect(() => {
        dispatch(userPayBillHistory(selectRequest));
    }, [request])

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setRequest({...request, [name] : value});
    }

    useEffect(() => {
        dispatch(userCardUsageHistory(request));
    },[request]);

    useEffect(() => {
        setPayRequest({...payRequest, "targetId" : request.cardIssuedId, "targetYear" : request.yearChoice, "targetMonth" : request.monthChoice, "payment" : cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee) + parseInt(currValue.cardCharge), 0)});
    }, [cardUsageHistory])

    useEffect(() => {
        setSelectRequest({...selectRequest, "cardIssuedId" : request.cardIssuedId, "targetYear" : request.yearChoice, "targetMonth" : request.monthChoice});
    }, [cardUsageHistory])

    const [selectRequest, setSelectRequest] = useState({
        "cardIssuedId": "",
        "targetYear": new Date().getFullYear(),
        "targetMonth": new Date().getMonth()+1,
    })

    const [payRequest, setPayRequest] = useState({
        "targetId" : "",
        "targetYear" : new Date().getFullYear(),
        "targetMonth" : new Date().getMonth()+1,
        "payment" : 0
    })

    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch(userPayCardBill(payRequest));        
    }

    return (
        <div className="container mt-5 pt-4">
            <h4 className="fw-bold text-center">카드사용내역</h4>
            
            <div className="container w-75">
                <div className="d-flex justify-content-start mb-1">
                    <Form>
                        <Form.Group as={Row} className="mb-2 pe-0 w-20" controlId="choiceCardNumber">
                            <Form.Label column sm="3" className="px-0 text-end" style={{fontSize: "13px"}}>카드번호</Form.Label>
                                <Col> 
                                    <Form.Select column sm="3" className="px-0 text-center" onChange={onChangeHandler} name="cardIssuedId" style={{fontSize: "13px", width: "200px"}}>
                                        {/* <option disabled selected>{cardNumber}</option> */}
                                        {cardPossessionList?.map((el) => 
                                        <option value={el.id} >{el.cardNumber}</option>
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
                                    <option disabled selected>{new Date().getFullYear()}</option>
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
                                        <option disabled selected>{new Date().getMonth()+1}</option>
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
            </div>

            <div>
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
                            <td>{el.installment === 0 ? "일시불" : el.installment}</td>
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
                            <p className="">{cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.cardCharge), 0)}</p>
                        </div>
                        <div className="col" style={{width: "100px"}}>
                            <span className="">{cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee), 0)}원</span>
                        </div>
                    </div> 
                </div>
                <div className="d-flex justify-content-end">
                    <div className="" style={{width: "130px"}}>
                        <b>합계: {cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee) + parseInt(currValue.cardCharge), 0)}</b>
                    </div>
                    {/* <div className="" style={{width: "130px"}}>
                        <b>납부금: {payBillHistory}</b>
                    </div>
                    <div className="" style={{width: "130px"}}>
                        <b>미납금 :{cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee) + parseInt(currValue.cardCharge), 0) - payBillHistory}</b>
                    </div> */}
                </div>

                <div>
                    <Button className="px-3" variant="outline-dark" onClick={onClickHandler}>납부하기</Button>
                </div>
            </div>
        </div>
    )
}
export default UserCardUsageHistory;