import { useDispatch, useSelector } from "react-redux";
import { userCardUsageHistory, userPayBillHistory } from "../../../store/card/cardSlice";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

const CheckCardUsageHistory = (props) => {

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

    return (    
        <div>
            <b>체크카드</b>
            <Table hover className="text-center">
                <thead>
                    <tr>
                        <th>일자</th>
                        <th>승인번호</th>
                        <th>사업자번호</th>
                        <th>가맹점명</th>
                        <th>업종</th>
                        <th>결제금액</th>
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
                        <td>{el.cardCharge}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
                
            <div className="row d-flex justify-content-end">
                <div className="col-1 text-end">
                    <p className="">건수 : {cardUsageHistory?.length}</p>
                </div>
                <div className="col-2 text-end">
                    <p className="">총액 : {cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.cardCharge), 0)}원</p>
                </div> 
            </div>
        </div>
    )
}
export default CheckCardUsageHistory;