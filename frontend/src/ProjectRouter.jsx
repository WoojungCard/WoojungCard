import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import Join from "./component/Join/Join";
import UserJoin from "./component/Join/UserJoin";
import StoreJoin from "./component/Join/StoreJoin";
import Login from "./component/Login/Login";
import CardProductList from "./component/Card/CardProductList";
import UserInfoManagement from "./component/user/UserInfoManagement";
import User from "./component/user/User";
import UserCardApplication from "./component/user/UserCardApplication";
import UserCardAppStatus from "./component/user/UserCardAppStatus";
import UserCardInfo from "./component/user/UserCardInfo";

const ProjectRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				// 회원가입 & 로그인 화면 레이아웃
				<Route path="/" element=<MainLayout/> >
					<Route path="cardProduct" element=<CardProductList/> />
					<Route path="login" element=<Login/> />
					<Route path="join" element=<Join/> />
					<Route path="userJoin" element=<UserJoin/> />
					<Route path="storeJoin" element=<StoreJoin/> />
				</Route>

				// 개인 고객 
				<Route path="/user/"  element=<User/> >
					<Route path="infoChange" element=<UserInfoManagement/> /> 
					<Route path="cardapplication/:cardId" element=<UserCardApplication/> /> 
					<Route path="cardApp" element=<UserCardAppStatus/> />
					<Route path="cardInfo" element=<UserCardInfo/> />
				</Route>

			</Routes>
		</BrowserRouter>
	);
}

export default ProjectRouter;