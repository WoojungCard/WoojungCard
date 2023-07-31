import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../header/MainHeader";

function MainLayout(props) {
	return (
		<div>
			<MainHeader />
			<Outlet />
		</div>
	);
}

export default MainLayout;