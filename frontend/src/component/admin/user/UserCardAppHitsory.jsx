import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cardAppHistory, userCardAppApprove } from "../../../store/card/cardSlice";
import { useNavigate } from "react-router-dom";

function UserCardAppHistory() {

    const {cardAppHistoryData, approveStatus} = useSelector((state) => state.card);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{dispatch(cardAppHistory());}                                                        , [])
    useEffect(() => {if      (approveStatus === "successed") navigate(0);
                     else if (approveStatus === "failed")    alert("실패하였습니다. 다시 시도해주세요.");}, [approveStatus])

    const onClickHandler = (e)=>{e.preventDefault();
                                 dispatch(userCardAppApprove(e.target.value));}

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
        <h4 className="fw-bold text-center mb-5">카드신청 내역</h4>
        <div className="container d-flex justify-content-center align-items-center">
            <Table hover className="text-center">
                <thead>
                    <tr>
                        <th>카드상품</th>
                        <th>신용/체크</th>
                        <th>신청일</th>
                        <th>신청인</th>
                        <th>생년월일</th>
                        <th>연락처</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cardAppHistoryData?.map((el)=>
                    <tr>
                        <td>{el.cardName}</td>
                        <td>{el.cardType === "CHECK" ? "체크카드" : "신용카드"}</td>
                        <td>{el.requestDate}</td>
                        <td>{el.userName}</td>
                        <td>{el.userBirth}</td>
                        <td>{el.userTel}</td>
                        <td><Button 
                        value={el.id} 
                        onClick={onConfirm}
                        className="px-3" 
                        variant="outline-dark"
                        >카드승인</Button></td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
        </div>
    </div> 
    )
}
export default UserCardAppHistory;