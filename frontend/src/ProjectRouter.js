import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Join from "./Join/Join";
import UserJoin from "./Join/UserJoin";
import StoreJoin from "./Join/StoreJoin";
import Login from "./Login/Login";
import CardProductList from "./Card/CardProductList";

function ProjectRouter(props) {
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
			</Routes>
		</BrowserRouter>
	);
}

export default ProjectRouter;