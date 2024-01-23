import { Roles } from "./enums";

export interface userData {
	_id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	role: Roles;
}

export interface StudentUserData extends userData {}

export interface AdminUserData extends userData {
	permissions: Array<String>;
}

type TypeText = "h1" | "h2" | "h3" | "bullet" | "list" | "p";

export interface TextBox {
	type: TypeText;
	text: string;
}
