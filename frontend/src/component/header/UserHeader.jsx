import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { logout, userGetInfo } from "../../store/user/userSlice";
import { checkJwt } from "../../store/token/tokenSlice";

const styles = {
    main: {
        textDecoration: 'none',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
};

// 로그인 후 보여지는 메인 헤더
function UserHeader(props) {

    const {userInfo} = useSelector((state)=>state.user);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userGetInfo());
    },[])

    const onClickHandler = () => {
        dispatch(logout());
    }

    useEffect(() => {
        dispatch(checkJwt());
        setInterval(dispatch(checkJwt()), 60000 * 25);
      }, []);

	return (	
		<div className={""} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-3 fixed"} id={"header_nav"}>
                <div className={"container justify-content-between"}>
                    <Link to={"/"} style={styles.main}>우정카드</Link>
                    
                    <Link to={"/cardProduct"} style={styles.main}>카드상품</Link>
                    
                    {userInfo.userName ? (
                        <div className="row">
                            <div className="col">
                                <b>{userInfo.userName}님</b>
                            </div>
                            <div className="col" style={styles.main}>
                                <span onClick={onClickHandler} >
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

export default UserHeader;