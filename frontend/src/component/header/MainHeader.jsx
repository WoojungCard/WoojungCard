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

    useEffect(() => {dispatch(userGetInfo())}, [])

    const onClickHandler = () => {dispatch(logout())}

	return (	
		<div className={""} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-3 fixed"} id={"header_nav"}>
                <div className={"container justify-content-between"}>
                    <Link to={"/"} style={styles.main}>
                        우정카드
                    </Link>
                    
                    <Link to={"/login"} style={styles.main}>
                        로그인
                    </Link>
                    
                </div>
            </nav>
        </div>
	);
}

export default MainHeader;