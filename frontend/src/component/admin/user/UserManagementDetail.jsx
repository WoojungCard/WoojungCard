import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminManageUserCard } from "../../../store/admin/adminSlice";
import { OverlayTrigger, Popover } from "react-bootstrap";

function UserManagementDetail() {

    const dispatch = useDispatch();
    const location = useLocation();

    const index = location.state.index;

    const {userListData} = useSelector((state) => state.user);
    const {userCardData} = useSelector((state) => state.admin);

    const userData = userListData[index];

    useEffect(() => {dispatch(adminManageUserCard(userData.id));}, []);

    const popoverClickUserName = (<Popover id="popover-click-user-name">
                                       <div className="container my-2">
                                           <span>{userData.userName}/</span>
                                           <span>{userData.userId}/</span>
                                           <span>{userData.userGender === "MAN" ? "남" : "여"}</span>
                                           <br />
                                           <span>{userData.userBirth}/</span>
                                           <br />
                                           <span>{userData.userTel}</span>
                                       </div>
                                 </Popover>)


    return (
        <div className="container mt-5 pt-4">
            <div className="container w-75">
                <h5 className="fw-bold text-start mb-4">
                    <OverlayTrigger
                        delay={{ hide: 400 }}
                        rootClose
                        placement="left"
                        overlay={popoverClickUserName}
                    >
                        <span>"{userData.userName}"</span>
                    </OverlayTrigger>
                    님 카드 내역 조회
                    </h5>

                <Table hover className="text-center">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>카드상품</th>
                            <th>카드번호</th>
                            <th>신용/체크</th>
                            <th>신청일</th>
                            <th>만료일</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userCardData.map((item, index) => {
                                index = index + 1;
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.cardName}</td>
                                        <td>{item.cardNumber}</td>
                                        <td>{item.cardType}</td>
                                        <td>{item.requestDate}</td>
                                        <td>{item.expirationDate}</td>
                                        <td>{item.state}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div> 
    );
}

export default UserManagementDetail;