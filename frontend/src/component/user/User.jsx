import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../Header/MainHeader";

function User(props) {
	return (
		<div>
			<MainHeader />
			<Outlet />
		</div>
	);
}

export default User;