import { Container, Typography, Divider } from "@mui/material";

export default function Home() {
	return (
		<>
			<Container sx={{ textAlign: "center", bgcolor: "#090c22ff" }}>
				<Typography variant="h1" component="span" sx={{ color: "#fff" }}>
					TES
				</Typography>
				<Typography variant={"h1"} component="span" sx={{ color: "#1d61b0ff" }}>
					QUIZ
				</Typography>
			</Container>

			<Container>
				<Typography variant={"h2"}>hello</Typography>

				<Typography>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fugiat
					aliquam obcaecati placeat adipisci, odio praesentium. Distinctio
					neque, autem earum totam excepturi, incidunt saepe magni doloribus
					ipsum, recusandae ipsa ad.
				</Typography>

				<Typography variant={"h6"}>hello</Typography>

				<Typography variant="subtitle2">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fugiat
					aliquam obcaecati placeat adipisci, odio praesentium. Distinctio
					neque, autem earum totam excepturi, incidunt saepe magni doloribus
					ipsum, recusandae ipsa ad.
				</Typography>
				<Divider sx={{ my: 5 }} />

				<Typography variant="h2" component={"span"}>
					hola
				</Typography>

				<Typography variant="subtitle2" color={"#090c22ff"}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fugiat
					aliquam obcaecati placeat adipisci, odio praesentium. Distinctio
					neque, autem earum totam excepturi, incidunt saepe magni doloribus
					ipsum, recusandae ipsa ad.
				</Typography>
			</Container>
		</>
	);
}
