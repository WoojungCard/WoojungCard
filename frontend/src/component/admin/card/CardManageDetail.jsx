import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

function CardManageDetail() {
    const location = useLocation();
    const index = location.state.index;

    const dispatch = useDispatch();
    const { cardListData } = useSelector((state) => state.card);
    const cardData = cardListData[index];

    const customHeight = {
        height: "40px",
    };

    return (
        <div className="container mt-5 pt-5">
            <h2 className="fw-bold text-center">{cardData.cardName}</h2>

            <div className="row justify-content-center mt-4">
                <img
                    className="d-block p-0"
                    src="/img/defaultCardImage.png"
                    alt="[우정카드]"
                    style={{ width: "145px", height: "90px" }}
                />
            </div>

            <div className="row justify-content-center mt-5">
                <Table className="text-center w-50 fs-5">
                    <tbody>
                        <tr style={customHeight}>
                            <th>카드명</th>
                            <td>{cardData.cardName}</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>신용/체크</th>
                            <td>{cardData.cardType}</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>등록일</th>
                            <td>{cardData.registerDate}</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>가입자 수</th>
                            <td>{cardData.count}</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>설명</th>
                            <td>{cardData.cardInfo}</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>비고</th>
                            <td>{cardData.state}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <Link to="/">
                    <Button type="button" className="px-3" variant="outline-dark">
                        수정하기
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default CardManageDetail;
