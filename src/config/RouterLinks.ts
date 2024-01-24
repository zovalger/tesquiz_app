const RouterLinks = {
	landing: "/",
	student: {
		register: "/register",
		login: "/user/login",
		dashboard: "/user/student/dashboard",
	},
	admin: {
		login_admin: "/user/login_admin",
		dashboard: "/user/admin/dashboard",
		sections: "/user/admin/sections",
		classOfSection: `/user/admin/sections/classes`,
	},
};

export default RouterLinks;
