import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { logout, userGetInfo } from "../../store/user/userSlice";

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

    const {userInfo} = useSelector((state)=>state.user);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userGetInfo());
    },[])

    const onClickHandler = () => {
        dispatch(logout());
    }

	return (	
		<div className={""} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-3 fixed"} id={"header_nav"}>
                <div className={"container justify-content-between"}>
                    <Link to={"/cardProduct"} style={styles.main}>우정카드</Link>
                    
                    {/* <Link to={"/cardProduct"} style={styles.main}>카드상품</Link> */}
                    
                    {userInfo.userName ? (
                        <div className="row justify-content-end" style={{width: "500px"}}>
                            <div className="col-3 d-flex align-items-center">
                                <h5 className="fw-bold mb-0">{userInfo.userName}님</h5>
                            </div>
                            <div className="col-3" style={styles.main}>
                                <span 
                                    style={{cursor: "pointer"}}
                                    onClick={onClickHandler}
                                >
                                    로그아웃
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Link to={"/login"} style={styles.main}>로그인</Link>
                        </div>
                    )}
                </div>
            </nav>
        </div>
	);
}

export default MainHeader;