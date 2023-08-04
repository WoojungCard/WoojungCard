import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userCardApp, userCardAppInfo } from "../../store/user/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { cardGetInfo } from "../../store/card/cardSlice";


function UserCardApplication() {

const {userAppInfo} = useSelector((state) => state.user);
const {cardInfo} = useSelector((state) => state.card);

const dispatch = useDispatch();
const param = useParams();
const navigate = useNavigate();

useEffect(() => {
    dispatch(cardGetInfo(param.cardId));
    dispatch(userCardAppInfo());
}, [])

const [insertRequestDate, setInsertRequestDate] = useState('');

const onChangeHandler = (e) => {
    setInsertRequestDate(e.target.value);
}

const request = ({
    "cardId" : param.cardId,
    "requestDate" : insertRequestDate
})

const onClickHandler = (e) => {
    console.log(request);
    console.log(insertRequestDate);
    e.preventDefault();
    dispatch(userCardApp(request));
    navigate("/user/cardAppStatus");
}

return (
    <div className="mt-5">
        <Container className="container d-flex justify-content-center align-items-center" style={{height: "700px"}}>
        <Form style={{width: "400px"}}>
            <h4 className="fw-bold text-center">카드발급 신청</h4>

            <Form.Group className="mb-3" controlId="formPlaintextUserName">
                <Form.Label className="mb-0 ">카드상품</Form.Label>
                <Form.Control
                    type="text" 
                    readOnly           
                    className="mb-3 bg-light"
                    defaultValue={cardInfo.cardName}
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPlaintextUserBirth">
                <Form.Label className="mb-0 ">신용/체크</Form.Label>
                <Form.Control
                    type="text"
                    readOnly           
                    className="mb-3 bg-light"
                    defaultValue={cardInfo.cardType === "CREDIT" ? "신용카드" : "체크카드"}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextUserTel">
                <Form.Label className="mb-0 ">신청일</Form.Label>
                <Form.Control
                    type="date"
                    className="mb-4"
                    defaultValue={new Date()}
                    onChange={onChangeHandler}
                />
            </Form.Group>

            <h5 className="fw-bold text-center mt-5">신청인 정보</h5>

            <Form.Group className="mb-3" controlId="formPlaintextUserName">
                <Form.Label className="mb-0 ">이름</Form.Label>
                <Form.Control
                    type="text" 
                    readOnly           
                    className="mb-3 bg-light"
                    defaultValue={userAppInfo.userName}
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPlaintextUserBirth">
                <Form.Label className="mb-0 ">생년월일</Form.Label>
                <Form.Control
                    type="text"
                    readOnly           
                    className="mb-3 bg-light"
                    defaultValue={userAppInfo.userBirth}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextUserTel">
                <Form.Label className="mb-0 ">연락처</Form.Label>
                <Form.Control
                    type="text"
                    readOnly
                    // maxLength={13}
                    className="mb-4 bg-light"
                    defaultValue={userAppInfo.userTel}
                />
            </Form.Group>

            <div className="d-grid gap-1">
                <Button className="px-3" variant="outline-dark" onClick={onClickHandler}>신청하기</Button>
            </div>
                
            </Form>

        </Container>
        </div>
    );
}
export default UserCardApplication;