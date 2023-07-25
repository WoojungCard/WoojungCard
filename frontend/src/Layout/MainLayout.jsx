import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../Header/MainHeader";

function MainLayout(props) {
	return (
		<div>
			<MainHeader />
			<Outlet />
		</div>
	);
}

export default MainLayout;