import React from "react";
import {Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const styles = {
    main: {
        textDecoration: 'none',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }

};

// 카드사 관리자 접속 시, 보여지는 헤더
function AdminHeader() {
	return (	
		<div id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-3 fixed"} id={"header_nav"}>
                <div className={"container justify-content-between"}>
                    <Link to={"/admin"} style={styles.main}>우정카드</Link>
                    
                    <Link to={"/admin/cardManage"} style={styles.main}>상품관리</Link>
                    
                    <Link to={"/admin/userManagement"} style={styles.main}>고객관리</Link>
                    
                    <Link to={"/"} style={styles.main}>가맹점관리</Link>
                    
                    <Link to={"/admin/financialManage"} style={styles.main}>정산관리</Link>
                    
                    <Link to={"/"} style={styles.main}>로그아웃</Link>
                </div>
            </nav>
        </div>
	);
}

export default AdminHeader;