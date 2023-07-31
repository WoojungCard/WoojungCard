import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./component/layout/MainLayout";
import Join from "./component/join/Join";
import UserJoin from "./component/join/UserJoin";
import StoreJoin from "./component/join/StoreJoin";
import Login from "./component/login/Login";
import CardProductList from "./component/card/CardProductList";
import AdminLayout from "./component/layout/AdminLayout";
import UserManagement from "./component/admin/user/UserManagement";
import UserManagementDetail from "./component/admin/user/UserManagementDetail";

const ProjectRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* 회원가입 & 로그인 화면 레이아웃 */}
				<Route path="/" element=<MainLayout/> >
					<Route path="cardProduct" element=<CardProductList/> />
					<Route path="login" element=<Login/> />
					<Route path="join" element=<Join/> />
					<Route path="userJoin" element=<UserJoin/> />
					<Route path="storeJoin" element=<StoreJoin/> />
					
				</Route>
				
				{/* 카드사 관리자 레이아웃 */}
				<Route path="/admin" element=<AdminLayout/> >
					<Route path="userManagement" element=<UserManagement/> />
					<Route path="userManagementDetail/:index" element=<UserManagementDetail/> />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default ProjectRouter;