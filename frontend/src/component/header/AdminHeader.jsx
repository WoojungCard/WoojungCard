import React from "react";
import {Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const styles = {
    main: {
        textDecoration: 'none',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },

    sub: {
        textDecoration: 'none',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    }

};

// 카드사 관리자 접속 시, 보여지는 헤더
function AdminHeader() {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

	return (	
		<div id={"div-header"}>
            <nav 
                className={"navbar navbar-expand-sm navbar-white bg-white mt-3 fixed"} 
                id={"header_nav"}
                >
                <div 
                    className={"container justify-content-between"} 
                    onMouseOver={handleShow}
                    >
                    <Link to={"/admin"} style={styles.main}>우정카드</Link>
                    
                    <Link to={"/admin/cardManage"} style={styles.main}>상품관리</Link>
                    
                    <Link to={"/admin/userManagement"} style={styles.main}>고객관리</Link>
                    
                    <Link to={"/"} style={styles.main}>가맹점관리</Link>
                    
                    <Link to={"/admin/financialManage"} style={styles.main}>정산관리</Link>
                    
                    <Link to={"/"} style={styles.main}>로그아웃</Link>
                </div>
            </nav>

            <Offcanvas 
                show={show} 
                onClick={handleClose}
                onHide={handleClose} 
                placement="top" 
                backdrop={false} 
                scroll={true} 
                style={{height: "200px"}}
                >
                <Offcanvas.Body>
                    <nav 
                        className={"navbar navbar-expand-sm navbar-white bg-white mt-3 mb-0 fixed"} 
                        id={"header_nav"}
                        >
                        <div 
                            className={"container justify-content-between align-items-start"}>
                            
                            <Link to={"/admin/financialManage"} style={styles.main}>우정카드</Link>
                            
                            <div className=" flex-column">
                                <div>
                                    <Link to={"/admin/cardManage"} style={styles.main}>상품관리</Link>
                                </div>
                                <div>
                                    <Link to={"/admin/cardManage"} style={styles.sub}>카드상품관리</Link>
                                </div>
                            </div>
                            
                            <div className=" flex-column">
                                <div>
                                    <Link to={"/admin/userManagement"} style={styles.main}>고객관리</Link>
                                </div>
                                <div>
                                    <Link to={"/admin/userManagement"} style={styles.sub}>고객정보조회</Link>
                                </div>
                                <div>
                                    <Link to={"/admin/userManagement"} style={styles.sub}>카드신청내역</Link>
                                </div>
                                <div>
                                    <Link to={"/admin/userManagement"} style={styles.sub}>정지신청내역</Link>
                                </div>
                            </div>
                            
                            <div className=" flex-column">
                                <div>
                                    <Link to={"/"} style={styles.main}>가맹점관리</Link>
                                </div>
                                <div>
                                    <Link to={"/admin/userManagement"} style={styles.sub}>가맹점정보조회</Link>
                                </div>
                                <div>
                                    <Link to={"/admin/userManagement"} style={styles.sub}>가맹점신청내역</Link>
                                </div>
                                <div>
                                    <Link to={"/admin/userManagement"} style={styles.sub}>퇴점신청내역</Link>
                                </div>
                            </div>
                            
                            <div className=" flex-column">
                                <div>
                                    <Link to={"/admin/financialManage"} style={styles.main}>정산관리</Link>
                                </div>
                                <div>
                                    <Link to={"/admin/financialManage"} style={styles.sub}>통합매출관리</Link>
                                </div>
                            </div>
                            
                            <Link to={"/"} style={styles.main}>로그아웃</Link>

                        </div>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
	);
}

export default AdminHeader;