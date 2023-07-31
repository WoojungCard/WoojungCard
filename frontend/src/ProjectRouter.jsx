import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./component/layout/MainLayout";
import Join from "./component/join/Join";
import UserJoin from "./component/join/UserJoin";
import StoreJoin from "./component/join/StoreJoin";
import Login from "./component/login/Login";
import CardProductList from "./component/card/CardProductList";
import UserInfoManagement from "./component/user/UserInfoManagement";
import UserCardApplication from "./component/user/UserCardApplication";
import UserCardAppStatus from "./component/user/UserCardAppStatus";
import UserCardInfo from "./component/user/UserCardInfo";
import AdminLayout from "./component/layout/AdminLayout";
import UserManagement from "./component/admin/user/UserManagement";
import UserManagementDetail from "./component/admin/user/UserManagementDetail";
import CardProductDetail from "./component/card/CardProductDetail";
import CardManage from "./component/admin/card/CardManage";
import CardManageDetail from "./component/admin/card/CardManageDetail";

const ProjectRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* 회원가입 & 로그인 화면 레이아웃 */}
				<Route path="/" element=<MainLayout/> >
					<Route path="cardProduct" element=<CardProductList/> />
					<Route path="cardProductDetail" element=<CardProductDetail/> />
					<Route path="login" element=<Login/> />
					<Route path="join" element=<Join/> />
					<Route path="userJoin" element=<UserJoin/> />
					<Route path="storeJoin" element=<StoreJoin/> />
				</Route>

				{/* 개인 고객 */}
				<Route path="/user" element=<MainLayout/> >
					<Route path="infoChange" element=<UserInfoManagement/> /> 
					<Route path="cardapplication/:cardId" element=<UserCardApplication/> /> 
					<Route path="cardApp" element=<UserCardAppStatus/> />
					<Route path="cardInfo" element=<UserCardInfo/> />
				</Route>
				
				{/* 카드사 관리자 레이아웃 */}
				<Route path="/admin" element=<AdminLayout/> >
					<Route path="userManagement" element=<UserManagement/> />
					<Route path="userManagementDetail/:index" element=<UserManagementDetail/> />
					<Route path="cardManage" element=<CardManage/> />
					<Route path="cardManageDetail/:index" element=<CardManageDetail/> />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default ProjectRouter;