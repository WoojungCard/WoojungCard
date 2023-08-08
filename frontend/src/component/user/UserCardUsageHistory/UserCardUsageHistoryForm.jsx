import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { findCardTypeById, userCardPossessionHistory } from "../../../store/card/cardSlice";
import CreditCardUsageHistory from "./CreditCardUsageHistory";
import CheckCardUsageHistory from "./CheckCardUsageHistory";

function UserCardUsageHistoryForm() {

    const location = useLocation();
    const stateData = location.state;

    const {cardPossessionList, cardType} = useSelector((state) => state.card);

    const dispatch = useDispatch();

    const [request, setRequest] = useState({
        "cardIssuedId" : "",
        "yearChoice" : new Date().getFullYear(),
        "monthChoice" : new Date().getMonth()+1,
    })

    useEffect(() => {
        dispatch(userCardPossessionHistory());
    }, [])

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setRequest({...request, [name] : value});    
    }

    useEffect(() => {
        dispatch(findCardTypeById(request.cardIssuedId));
    },[request])

    return (
        <div className="container mt-5 pt-4">
            <h4 className="fw-bold text-center">카드사용내역</h4>
            
            <div className="container w-75 d-flex justify-content-between">
                <div className="me-auto mb-1">
                    <Form>
                        <Form.Group as={Row} className="mb-2 pe-0 w-20" controlId="choiceCardNumber">
                            <Form.Label column sm="3" className="px-0 text-end" style={{fontSize: "13px"}}>카드번호</Form.Label>
                            <Col> 
                                <Form.Select column sm="3" className="px-0 text-center" onChange={onChangeHandler} name="cardIssuedId" style={{fontSize: "13px", width: "200px"}}>
                                    {stateData === undefined || stateData === null ?             
                                        <option disabled selected>카드를 선택해주세요.</option>
                                        :
                                        <option disabled selected>{stateData.cardNumber}</option>
                                    }
                                    {cardPossessionList?.map((el) => 
                                        <option value={el.id}>{el.cardNumber}</option>
                                    )} 
                                </Form.Select>  
                            </Col>
                        </Form.Group>
                    </Form>
                </div>

                <div className=" mb-1">
                    <Form>
                        <Form.Group className="mb-2 pe-0" controlId="choiceYear">
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
                    </Form>
                </div>
                <div>
                    <Form>  
                        <Form.Group className="mb-2 pe-0" controlId="choice">
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
                {cardType === "CREDIT" ? (
                    <CreditCardUsageHistory 
                        cardIssuedId={request.cardIssuedId}
                        yearChoice={request.yearChoice}
                        monthChoice={request.monthChoice}
                    ></CreditCardUsageHistory>
                ) : (
                    <CheckCardUsageHistory
                        cardIssuedId={request.cardIssuedId}
                        yearChoice={request.yearChoice}
                        monthChoice={request.monthChoice}
                    ></CheckCardUsageHistory>
                )}
            </div>
        </div>
    )
}
export default UserCardUsageHistoryForm;