import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userCardCancelApprove, userCardCancelHistory } from "../../../store/card/cardSlice";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UserCardCancelHistory() {

    const {cardCancelHistoryData, canceledApproveStatus} = useSelector((state) => state.card);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickHandler = (e) => {e.preventDefault();
                                   dispatch(userCardCancelApprove(e.target.value));}

    useEffect(() => {dispatch(userCardCancelHistory());}                                                       , []);
    useEffect(() => {if      (canceledApproveStatus === "successed") navigate(0);
                     else if (canceledApproveStatus === "failed")    alert("실패하였습니다. 다시 시도해주세요.");}, [canceledApproveStatus])


    const onConfirm = (e) => {
        if (window.confirm("승인하시겠습니까?")) {
            onClickHandler(e);
            alert("승인 완료되었습니다");
        } else {
            alert("취소되었습니다.");
        }
    }
    return (
        <div className="container mt-5 pt-4">
            <div className="container w-75">
                <h4 className="fw-bold text-center mb-5">해지신청 내역</h4>
                <div className="container d-flex justify-content-center align-items-center">
                    <Table hover className="text-center">
                        <thead>
                            <tr>
                                <th>카드번호</th>
                                <th>카드상품</th>
                                <th>신용/체크</th>
                                <th>해지신청일</th>
                                <th>신청인</th>
                                <th>생년월일</th>
                                <th>연락처</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cardCancelHistoryData?.map((el)=>
                            <tr>
                                <td>{el.cardNumber}</td>
                                <td>{el.cardName}</td>
                                <td>{el.cardType === "CREDIT" ? "신용카드" : "체크카드"}</td>
                                <td>{el.requestDate}</td>
                                <td>{el.userName}</td>
                                <td>{el.userBirth}</td>
                                <td>{el.userTel}</td>
                                <td>{!el.cancelDate 
                                    ? 
                                        <Button 
                                        value={el.id} 
                                        onClick={onConfirm}
                                        className="px-3" 
                                        variant="outline-dark"
                                        >승인</Button> 
                                    : 
                                        "승인완료"
                                    }</td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>  
    );
}
export default UserCardCancelHistory;