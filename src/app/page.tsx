import TextInputContent from "@/components/TextInputContent";
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

			<TextInputContent />

		</>
	);
}
