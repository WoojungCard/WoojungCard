import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { storePayList } from "../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function UserPurchase() {
    const dispatch = useDispatch();
    const {userCardList} = useSelector((state) => state.user);

    useEffect(() => {dispatch(userCardList())}, []);

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
                                                // onChange={} 
                                                name="cardIssuedId">
                                         {/* {userCardList?.map((el) => 
                                            <option value={el.id} >{el.cardNumber}</option>
                                        )}  */}
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
                                                // onChange={} 
                                                name="storeName">
                                         {/* {storePayList?.map((el) => 
                                            <option value={el.id} >{el.cardNumber}</option>
                                        )}  */}
                                    </Form.Select>  
                                </Col>
                        </Form.Group>
                    </Form>

                    <div className="row my-4 pt-4 text-end">
                        <div className="col-4">
                            <span className="mt-4">결제 금액 : </span>
                        </div>
                        <div className="col">
                            <span className="fw-bold">0 원</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-2">
                <Button type="button" variant="outline-dark" className="w-75">결제하기</Button>
            </div>
        </div>
    );
}

export default UserPurchase;