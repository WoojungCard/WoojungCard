import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userCardUsageHistory, userPayBillHistory, userPayCardBill } from "../../../store/card/cardSlice";

const CreditCardUsageHistory = (props)=>{

    const {cardUsageHistory, payBillHistory} = useSelector((state) => state.card);

    const dispatch = useDispatch();

    const cardIssuedId = props.cardIssuedId;
    const yearChoice = props.yearChoice;
    const monthChoice = props.monthChoice;

    useEffect(() => {
        dispatch(userCardUsageHistory({"cardIssuedId" : cardIssuedId, "yearChoice" : yearChoice, "monthChoice" : monthChoice}));
    },[cardIssuedId, yearChoice, monthChoice]);

    useEffect(() => {
        dispatch(userPayBillHistory({"cardIssuedId" : cardIssuedId, "targetYear" : yearChoice, "targetMonth" : monthChoice}));
    }, [cardIssuedId, yearChoice, monthChoice])

    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch(userPayCardBill({"targetId" : cardIssuedId, "targetYear" : yearChoice, "targetMonth" : monthChoice, "payment" : cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee) + parseInt(currValue.cardCharge), 0)}));        
    }

    return (    
        <div>
            <div>
            <b>신용카드</b>
                <Table hover className="text-center">
                    <thead>
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

                <div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-1 text-end">
                            <p>건수 : {cardUsageHistory?.length}</p>
                        </div>
                        <div className="col-2 text-end pe-0">
                            <p>총액 : {cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.cardCharge), 0)}원</p>
                        </div>
                        
                        <div className="col-2 text-end pe-4">
                            {cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee), 0) !== null &&
                                !isNaN(cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee), 0)) ?
                                    <span>할부이자 : ({cardUsageHistory.reduce((sum, currValue) => sum + parseInt(currValue.interestBee), 0)})</span>
                                        : (<span>할부이자 : 0원</span>)}
                        </div>
                    </div>

                    {cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee), 0) !== null &&
                                    !isNaN(cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee), 0)) 
                                    
                        ?

                        <div className="d-flex flex-column align-items-end">
                            <div className="mb-4 me-3">
                                <b>합계: {cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee) + parseInt(currValue.cardCharge), 0)}</b>
                            </div>
                            
                            <div className="text-end border-top border-bottom border-2 px-2 me-1 py-1">
                                <div>
                                    <b>납부금: {payBillHistory !== null && !isNaN(payBillHistory) ? payBillHistory : 0}원</b>
                                </div>
                                <div>
                                    <b>미납금 :{cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee) + parseInt(currValue.cardCharge), 0) - payBillHistory}원</b>
                                </div>
                            </div>
                            
                        </div> 

                        :

                        <div className="d-flex flex-column align-items-end">
                            <div className="mb-4 me-3">
                                <b>합계: {cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee), 0)}</b>
                            </div>

                            <div className="text-end border-top border-bottom border-2 px-2 me-1 py-1">
                                <div>
                                    <b>납부금: {payBillHistory !== null && !isNaN(payBillHistory) ? payBillHistory : 0}원</b>
                                </div>
                                <div>
                                    <b>미납금 :{cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee), 0) - payBillHistory}원</b>
                                </div>
                            </div>
                            
                        </div> 
                    }


                    <div>
                        <Button className="px-3" variant="outline-dark" onClick={onClickHandler}>납부하기</Button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export default CreditCardUsageHistory;