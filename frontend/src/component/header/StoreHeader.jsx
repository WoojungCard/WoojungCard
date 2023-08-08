import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { logout, userGetInfo } from "../../store/user/userSlice";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { storeGetInfo } from "../../store/store/storeSlice";

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

// 로그인 후 가맹점용 헤더
function StoreHeader(props) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const {storeInfo} = useSelector((state)=>state.store);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(storeGetInfo());
    },[])

    const onClickLogOut = () => {
        dispatch(logout());
        navigate("/", {replace : true});
        navigate(0);
    }

	return (	
		<div className={""} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-3 fixed"} id={"header_nav"}>
                <div 
                    className={"container align-items-start"}
                    onMouseOver={handleShow}
                    >
                    
                    {storeInfo.storeName ? (
                        <div className="row justify-content-between w-100">
                            
                            <div className="col-2">
                                <Link to={"/store"} style={styles.main}>
                                    우정카드
                                </Link>
                            </div>
                            

                            <div className="col-2">
                                <Link to={"/store"} style={styles.main}>
                                    가맹점
                                </Link>
                            </div>

                            <div className="col-2">
                                <Link to={"/store/storeInfoUpdate"} style={styles.main}>
                                    가맹점정보
                                </Link>
                            </div>                            
                            
                    
                            <div className="col-2 d-flex align-items-center justify-content-end pe-0">
                                <h5 className="fw-bold mb-0">
                                    {storeInfo.storeName}님
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
                                <Link to={"/store"} style={styles.main}>
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
                                        <Link to={"/store"} style={styles.main}>
                                            우정카드
                                        </Link>
                                    </div>

                                    <div className="flex-column col-2">
                                        <div>
                                            <Link to={"/store"} style={styles.main}>
                                                가맹점
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={"/store"} style={styles.sub}>
                                                가맹점 매출관리
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={"/store/storeSalesDeposit"} style={styles.sub}>
                                                매출입금내역
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex-column col-2">
                                        <div>
                                            <Link to={"/store/storeInfoUpdate"} style={styles.main}>
                                                가맹점정보
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={"/store/storeInfoUpdate"} style={styles.sub}>
                                                가맹점정보관리
                                            </Link>
                                        </div>
                                    </div>
                            
                                    <div className="col-2 d-flex align-items-center justify-content-end">
                                        <h5 className="fw-bold mb-0 mt-2">
                                            {storeInfo.storeName}님
                                        </h5>
                                    </div>

                                    <div className="" style={styles.main}>
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

export default StoreHeader;