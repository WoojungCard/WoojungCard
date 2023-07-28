import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import Join from "./component/Join/Join";
import UserJoin from "./component/Join/UserJoin";
import StoreJoin from "./component/Join/StoreJoin";
import Login from "./component/Login/Login";
import CardProductList from "./component/Card/CardProductList";
import StoreInfoUpdate from "./component/Join/StoreInfoUpdate";

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
					<Route path="StoreInfoUpdate" element=<StoreInfoUpdate/> />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default ProjectRouter;