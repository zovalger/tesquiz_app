import { TextBox } from "../../types";

const TextBoxData: TextBox[] = [
	{ type: "h1", text: "hola" },
	{
		type: "p",
		text: "		Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur facilis, nobis ea dicta dolorem, exercitationem eum quisquam incidunt porro adipisci et tempora aut iusto libero! Similique a dolorem consequatur!		",
	},
	{
		type: "p",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur facilis, nobis ea dicta dolorem, exercitationem eum quisquam incidunt porro adipisci et tempora aut iusto libero! Similique a dolorem consequatur!		",
	},
	{
		type: "bullet",
		text: "		Lorem ipsum dolor sit amet consectetur 	",
	},
	{
		type: "bullet",
		text: "ea dicta dolorem, dipisci et tempora aut iusto libero! Simi	",
	},
	{
		type: "bullet",
		text: "ora aut iusto libero! Simi",
	},
];

export default TextBoxData;
