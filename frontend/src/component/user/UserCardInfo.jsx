import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userCardAppStatus } from "../../store/user/userSlice";
import { useEffect } from "react";

function UserCardInfo() {
    const dispatch = useDispatch();

    const {userCardAppStatusData} = useSelector((state) => state.user);

    useEffect(()=>{
        dispatch(userCardAppStatus());
    }, [])
    
    return(
        <div className="mt-5">
        <h4 className="fw-bold text-center mb-5">카드신청현황조회</h4>
        <div className="container d-flex justify-content-center align-items-center">
        <table>
            <thead className="">
                <th>카드번호</th>
                <th>카드상품</th>
                <th>신용/체크</th>
                <th>신청일</th>
                <th>지급일</th>
            </thead>    
            <tbody>
            {userCardAppStatusData?.map((el) => 
                <tr>
                    <td>{<Link>{el.cardNumber}</Link>}</td>
                    <td>{el.cardName}</td>
                    <td>{el.cardType}</td>
                    <td>{el.requestDate}</td>
                    <td>{el.expirationDate}</td>
                    <td><Button>해지 신청</Button></td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    </div>
    )
}         
export default UserCardInfo;