import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { storePayList, userCardList, userCardPayment } from "../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

function UserPurchase() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userCardListData} = useSelector((state) => state.user);
    const {storePayListData} = useSelector((state) => state.user);
    const [cardData, setCardData] = useState([]);
    const [storeData, setStoreData] = useState([]);

    useEffect(() => {dispatch(userCardList());}, []);

    useEffect(() => {dispatch(storePayList());}, []);

    useEffect(() => {
        setCardData(userCardListData);
        setStoreData(storePayListData);
    }, [userCardListData, storePayListData]);

    const [cardId, setCardId] = useState('');
    const [storeId, setStoreId] = useState('');
    const [storeSelectIndex, setStoreSelectIndex] = useState(-1);
    const [selectedData, setSelectedData] = useState({});
    const [selectedPrice, setSelectedPrice] = useState();

    const onChangeinputCardName = (e) => {setCardId(e.target.value)};
    const onChangeinputStoreName = (e) => {
        setStoreId(e.target.value);
        let index = e.target.selectedIndex;
        index = index - 1;
        setStoreSelectIndex(index);
    };

    useEffect(() => {
        setSelectedData(storeData[storeSelectIndex]);
    }, [storeId]);

    const purchase = ({"cardIssuedId" : cardId,
                        "storeId" : storeId,
                        "installment" : 0,
                        "cardCharge" : selectedData?.price});

    const onClickHandler = (e) => {e.preventDefault();
                                  dispatch(userCardPayment(purchase));}
    
    const onClickPurchase = (e) => {
        if (window.confirm("결제하시겠습니까?")) {
            onClickHandler(e);
            alert("결제되었습니다.");
            navigate("/user/cardUsageHistory");
        } else {
            alert("취소되었습니다.")
        }

    };

    return (
        <div className="container border rounded-3 w-50 mt-5 py-4">
            <h4 className="fw-bold text-center mt-2 mb-4">결제하기</h4>
            <div className="row mt-5">
                <div className="col me-4">
                    <Form>
                        <Form.Group as={Row} className="mb-2 pe-0 w-20" controlId="selectCardNumber">
                            <Form.Label column sm="3" className="px-0 text-end">카드번호</Form.Label>
                                <Col> 
                                    <Form.Select column sm="3" className="px-0 text-center" 
                                                onChange={onChangeinputCardName} 
                                                name="cardIssued">
                                                <option>카드를 선택하세요</option>
                                          {cardData.map((item) => 
                                            <option value={item.id}>{item.cardName} {item.cardNumber}</option>
                                        )}  
                                    </Form.Select>  
                                </Col>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col me-4">
                    <Form>
                        <Form.Group as={Row} className="mb-2 pe-0 w-20" controlId="selectStoreName">
                            <Form.Label column sm="3" className="px-0 text-end">가맹점</Form.Label>
                                <Col> 
                                    <Form.Select column sm="3" className="px-0 text-center" 
                                                onChange={onChangeinputStoreName} 
                                                name="storeName">
                                                    <option>가맹점을 선택하세요</option>
                                          {storeData.map((item) => 
                                            <option value={item.id}>{item.storeName}</option>
                                        )}  
                                    </Form.Select>  
                                </Col>
                        </Form.Group>
                    </Form>

                    <div className="row my-4 pt-4 text-end">
                        <div className="col-4">
                            <span className="mt-4">결제 금액 : </span>
                        </div>
                        <div className="col">
                            <span className="fw-bold">{selectedData?.price} 원</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-2">
                <Button type="button" variant="outline-dark" className="w-75" onClick={onClickPurchase}>결제하기</Button>

            </div>
        </div>
    );
}

export default UserPurchase;