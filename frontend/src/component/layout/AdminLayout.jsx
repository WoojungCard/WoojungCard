import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../header/AdminHeader";

function AdminLayout(props) {
	return (
		<div>
			<AdminHeader />
			<Outlet />
		</div>
	);
}

export default AdminLayout;