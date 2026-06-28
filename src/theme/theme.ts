import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
	palette: {
		mode: "dark",
		...palette,
	},
	typography,
	shape: {
		borderRadius: 14,
	},
});

export default theme;
