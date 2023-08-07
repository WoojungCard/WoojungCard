import React from "react";
import {Link} from "react-router-dom";

const styles = {
    main: {
        textDecoration: 'none',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }

};

// 로그인 전 보여지는 메인 헤더
function MainHeader(props) {
	return (	
		<div className={""} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-3 fixed"} id={"header_nav"}>
                <div className={"container justify-content-between"}>
                    <Link to={"/cardProduct"} style={styles.main}>우정카드</Link>
                    
                    {/* <Link to={"/cardProduct"} style={styles.main}>카드상품</Link> */}
                    
                    <Link to={"/login"} style={styles.main}>로그인</Link>
                </div>
            </nav>
        </div>
	);
}

export default MainHeader;