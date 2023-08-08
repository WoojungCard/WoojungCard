import React from "react";
import { Outlet } from "react-router-dom";
import StoreHeader from "../header/StoreHeader";


function StoreLayout(props) {
	return (
		<div>
			<StoreHeader />
			<Outlet />
		</div>
	);
}

export default StoreLayout;