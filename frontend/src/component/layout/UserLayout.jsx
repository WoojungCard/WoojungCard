import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../header/UserHeader";


function UserLayout(props) {
	return (
		<div>
			<UserHeader />
			<Outlet />
		</div>
	);
}

export default UserLayout;