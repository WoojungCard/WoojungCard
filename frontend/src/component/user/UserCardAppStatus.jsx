import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userCardAppStatus } from "../../store/user/userSlice";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function UserCardAppStatus() {

    const dispatch = useDispatch();

    const {userCardAppStatusData} = useSelector((state) => state.user);

    useEffect(()=>{
        dispatch(userCardAppStatus());
    }, [])

    return (
        <div className="mt-5">
            <h4 className="fw-bold text-center mb-5">카드신청현황조회</h4>
            <div className="container d-flex justify-content-center align-items-center">
            <Table hover className="text-center">
                <thead className="">
                    <th>카드번호</th>
                    <th>카드상품</th>
                    <th>신용/체크</th>
                    <th>신청일</th>
                    <th>지급일</th>
                </thead>
                {userCardAppStatusData?.map((el) => 
                <tbody>
                    <tr>
                        <td>{el.cardNumber ? el.cardNumber : "발급심사중"}</td>
                        <td>{el.cardName}</td>
                        <td>{el.cardType === "CHECK" ? "신용카드" : "체크카드"}</td>
                        <td>{el.requestDate}</td>
                        <td>{el.approvalDate ? el.approvalDate : "발급심사중"}</td>
                    </tr>
                </tbody>
                )}
            </Table>
            </div>
        </div>
    );
}
export default UserCardAppStatus; 