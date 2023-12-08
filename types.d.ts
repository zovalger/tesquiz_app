type TypeText = "h1" | "h2" | "h3" | "bullet" | "list" | "p";

export interface TextBox {
	type: TypeText;
	text: string;
}
