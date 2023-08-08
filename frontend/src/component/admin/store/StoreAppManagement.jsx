import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { StoreAppStatus, StoreAppStatusChange } from "../../../store/store/storeSlice";
import { useDispatch, useSelector } from "react-redux";


function StoreAppManagement() {
	const dispatch = useDispatch();
	
	const [insertStatus, setInsertStatus] = useState('');
	
	const {StoreAppStatusData} = useSelector((state) => state.store);
    
    useEffect(() => {
        dispatch(StoreAppStatus());
    }, []);
    
    const statusChange = ({
		"status" : insertStatus
	})
	
	

    return (
        <div className="container mt-5 pt-4">
            <h4 className="fw-bold text-center">가맹점신청내역</h4>
            
			<div className="container mt-4">
      		
                <Table hover className="text-center">
                    <thead className="">
                        <tr>
                            <th>No.</th>
                            <th>사업자번호</th>
                            <th>상호</th>
                            <th>대표자</th>
                            <th>업종</th>
                            <th>사업장주소</th>
                            <th>사업개시일</th>
                            <th>연락처</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            StoreAppStatusData.map((item, index) => {
                                index = index + 1;
                                
                                const onClickStoreChange = (e) => {
                                    // console.log(e.target.value);
                                    const id = e.target.value;
                                    dispatch(StoreAppStatusChange(id));
                                };
                                
                                const id = item.id;

                                const popoverClickStoreAddr = (
                                    <Popover>
                                        <span>{item.storeZipCode}</span><br/>
                                        <span>{item.storeAddress1}</span><br/>
                                        <span>{item.storeAddress2}</span>
                                    </Popover>
                                )

                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{item.businessNumber}</td>
                                        <td>{item.storeName}</td>
                                        <td>{item.representative}</td>
                                        <td>{item.businessType}</td>
                                        <td>
                                            <OverlayTrigger
                                                trigger={"click"}
                                                rootClose
                                                placement="left"
                                                overlay={popoverClickStoreAddr}
                                            >
                                                <span>
                                                    {item.storeAddress1 && item.storeAddress1.length > 15
                                                        ? item.storeAddress1.substring(0, 15) + "..."
                                                        : item.storeAddress1}
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td>{item.businessStartDate}</td>
                                        <td>{item.storeTel}</td>
                                        <td>
                                            <Button 
                                                className="rounded-pill" 
                                                variant="outline-info" 
                                                size="sm"
                                                value={item.id}
                                                onClick={onClickStoreChange}
                                                >
                                                    승인
                                            </Button>
                                        </td>
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

export default StoreAppManagement;