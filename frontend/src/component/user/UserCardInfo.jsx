import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userCardAppStatus } from "../../store/user/userSlice";
import { useEffect } from "react";
import { userCardCancelApp } from "../../store/card/cardSlice";

function UserCardInfo() {
    const dispatch = useDispatch();
    const location = useLocation();

    const {userCardAppStatusData} = useSelector((state) => state.user);

    useEffect(()=>{
        dispatch(userCardAppStatus());
    }, [])

    const onClickHandler = (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        dispatch(userCardCancelApp(e.target.value));
    }
    
    return(
        <div className="mt-5">
        <h4 className="fw-bold text-center mb-5">내 카드정보</h4>
        <div className="container d-flex justify-content-center align-items-center">
            <Table hover className="text-center">
            <thead className="">
                <th>카드번호</th>
                <th>카드상품</th>
                <th>신용/체크</th>
                <th>신청일</th>
                <th>만료일</th>
            </thead>    
            <tbody>
            {userCardAppStatusData?.map((el) => 
            el.cardState !== "WATING" &&
                <tr>
                    <td>{<Link 
                    style={{textDecoration: "none", color: "black"}}>
                        {el.cardNumber}
                    </Link>}</td>
                    <td>{el.cardName}</td>
                    <td>{el.cardType === "CREDIT" ? "신용카드" : "체크카드"}</td>
                    <td>{el.requestDate}</td>
                    <td>{el.expirationDate}</td>
                    <td>{el.state === "USE" ? <Button 
                        value={el.id} 
                        onClick={onClickHandler}
                        className="px-3" 
                        variant="outline-dark">해지 신청</Button> : "만료"}</td>
                </tr>
)}
            </tbody>
        </Table>
        </div>
    </div>
    )
}         
export default UserCardInfo;