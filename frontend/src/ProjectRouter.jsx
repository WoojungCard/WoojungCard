import {BrowserRouter, Routes, Route} from "react-router-dom";
import StoreInfoUpdate from "./component/store/StoreInfoUpdate";
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
import UserCardAppHistory from "./component/admin/user/UserCardAppHitsory";
import UserCardCancelHistory from "./component/admin/user/UserCardCancelHistory";
import CardManage from "./component/admin/card/CardManage";
import CardManageDetail from "./component/admin/card/CardManageDetail";
import CardNew from "./component/admin/card/CardNew";
import FinancialManage from "./component/admin/financial/FinancialManage";
import StoreManagement from "./component/admin/store/StoreManagement";
import StoreAppManagement from "./component/admin/store/StoreAppManagement";

const ProjectRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* 회원가입 & 로그인 화면 레이아웃 */}
				<Route path="/" element=<MainLayout/> >
					<Route path="cardProduct" element=<CardProductList/> />
					<Route path="cardProductDetail/:cardId" element=<CardProductDetail/> />
					<Route path="login" element=<Login/> />
					<Route path="join" element=<Join/> />
					<Route path="userJoin" element=<UserJoin/> />
					<Route path="storeJoin" element=<StoreJoin/> />
				</Route>

				{/* 개인 고객 */}
				<Route path="/user" element=<MainLayout/> >
					<Route path="infoChange" element=<UserInfoManagement/> /> 
					<Route path="cardapplication/:cardId" element=<UserCardApplication/> /> 
					<Route path="cardAppStatus" element=<UserCardAppStatus/> />
					<Route path="cardInfo" element=<UserCardInfo/> />
				</Route>
				
				{/* 가맹점 */}
				<Route path="/store" element=<MainLayout/> >
					<Route path="StoreInfoUpdate" element=<StoreInfoUpdate/> />
					
				</Route>
				
				{/* 카드사 관리자 레이아웃 */}
				<Route path="/admin" element=<AdminLayout/> >
					<Route path="userManagement" element=<UserManagement/> />
					<Route path="userManagementDetail/:index" element=<UserManagementDetail/> />
					<Route path="userCardAppHistory" element=<UserCardAppHistory/> />
					<Route path="userCardCancelHistory" element=<UserCardCancelHistory/> />
					<Route path="cardManage" element=<CardManage/> />
					<Route path="cardManageDetail/:index" element=<CardManageDetail/> />
					<Route path="cardNew" element=<CardNew/> />
					<Route path="financialManage" element=<FinancialManage/> />
					<Route path="storeManagement" element=<StoreManagement/> />
					<Route path="storeAppManagement" element=<StoreAppManagement/> />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default ProjectRouter;