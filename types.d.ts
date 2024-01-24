import { Roles, TypeText } from "./enums";

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

export interface RegisterStudentData {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	repeatPassword: string;
}

export interface SectionOfClass {
	_id: string;
	title: string;
	order: number;
}

export interface TextBox {
	type: TypeText;
	text: string;
}
export interface ClassOfSection {
	_id: string;
	title: string;
	order: number;
	content: TextBox[];
	created: string;
}
