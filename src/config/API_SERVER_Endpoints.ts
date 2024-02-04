import { SERVER_URL } from ".";

const API_SERVER_Endpoints = {
	student: {
		register: `${SERVER_URL}/registerStudent`,
	},
	admin: {
		sections: {
			create: `${SERVER_URL}/sections`,
			getList: `${SERVER_URL}/sections`,
		},
	},
};

export default API_SERVER_Endpoints;
