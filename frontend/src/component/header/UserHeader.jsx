import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { logout, userGetInfo } from "../../store/user/userSlice";
import { checkJwt } from "../../store/token/tokenSlice";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const styles = {
    main: {
        textDecoration: 'none',
        fontSize: 25,
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

// 로그인 후 개인고객용 헤더
function UserHeader(props) {

    const [show, setShow] = useState(false);

    const handleShow  = () => setShow(true);
    const handleClose = () => setShow(false);

    const {userInfo} = useSelector((state)=>state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onClickLogOut() {dispatch(logout());
                              navigate("/", {replace : true});
                              navigate(0);}

    useEffect(() => {dispatch(userGetInfo())}, [])
    useEffect(() => {dispatch(checkJwt());
                     setInterval(dispatch(checkJwt()), 60000 * 25);}, []);

	return (	
		<div className={""} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-3 fixed"} id={"header_nav"}>
                <div 
                    className={"container align-items-start"}
                    onMouseOver={handleShow}
                    >
                    
                    {userInfo.userName ? (
                        <div className="row justify-content-between w-100">
                            
                            <div className="col-2">
                                <Link to={"/user"} style={styles.main}>
                                    우정카드
                                </Link>
                            </div>
                            

                            <div className="col-2">
                                <Link to={"/user/cardInfo"} style={styles.main}>
                                    카드상품
                                </Link>
                            </div>

                            <div className="col-2">
                                <Link to={"/admin/cardManage"} style={styles.main}>
                                    나의카드
                                </Link>
                            </div>

                            <div className="col-2">
                                <Link to={"/admin/cardManage"} style={styles.main}>
                                    내정보
                                </Link>
                            </div>
                            
                    
                            <div className="col-2 d-flex align-items-center justify-content-end pe-0">
                                <h5 className="fw-bold mb-0">
                                    {userInfo.userName}님
                                </h5>
                            </div>

                            <div className="col-2" style={styles.main}>
                                <span 
                                    style={{cursor: "pointer"}}
                                    onClick={onClickLogOut}
                                >
                                    로그아웃
                                </span>
                            </div>
                            
                        </div>
                    ) : (
                        <div className="row justify-content-between w-100">
                            <div className="col">
                                <Link to={"/user"} style={styles.main}>
                                    우정카드
                                </Link>
                            </div>
                            <div className="col-1">
                                <Link to={"/login"} style={styles.main}>
                                    로그인
                                </Link>
                            </div>
                        </div>
                    )}

                    <Offcanvas 
                        show={show} 
                        onClick={handleClose}
                        onHide={handleClose} 
                        placement="top" 
                        backdrop={false} 
                        scroll={true} 
                        style={{height: "180px"}}
                        >
                        <Offcanvas.Body>
                            <nav 
                                className={"navbar navbar-expand-sm navbar-white bg-white mt-3 mb-0 fixed"} 
                                id={"header_nav"}
                                >
                                <div 
                                    className={"container justify-content-between align-items-start"}>
                                    
                                    <div className="col-2">
                                        <Link to={"/user"} style={styles.main}>
                                            우정카드
                                        </Link>
                                    </div>

                                    <div className="flex-column col-2">
                                        <div>
                                            <Link to={"/user"} style={styles.main}>
                                                카드상품
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={"/user"} style={styles.sub}>
                                                신용카드/체크카드
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={"/user/cardAppStatus"} style={styles.sub}>
                                                카드신청현황조회
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <Link to={"/user/purchase"} style={styles.main}>
                                            결제하기
                                        </Link>
                                    </div>

                                    <div className="flex-column col-2">
                                        <div>
                                            <Link to={"/user/cardInfo"} style={styles.main}>
                                                나의카드
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={"/user/cardInfo"} style={styles.sub}>
                                                카드정보
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={"/user/cardUsageHistory"} style={styles.sub}>
                                                카드이용조회
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex-column col-2">
                                        <div>
                                            <Link to={"/user/infoChange"} style={styles.main}>
                                                내정보
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={"/user/infoChange"} style={styles.sub}>
                                                회원정보수정
                                            </Link>
                                        </div>
                                    </div>
                                    
                            
                                    <div className="col-2 d-flex align-items-center justify-content-end">
                                        <h5 className="fw-bold mb-0 mt-2">
                                            {userInfo.userName}님
                                        </h5>
                                    </div>

                                    <div className="ps-3 col-2" style={styles.main}>
                                        <span 
                                            style={{cursor: "pointer"}}
                                            onClick={onClickLogOut}
                                        >
                                            로그아웃
                                        </span>
                                    </div>
                                    
                                </div>
                            </nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </nav>
        </div>
	);
}

export default UserHeader;