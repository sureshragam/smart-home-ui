import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		proxy: {
			"/api/monitoring": {
				// target: "http://127.0.0.1:8081",
				target: "http://192.168.1.22:8080",
				changeOrigin: true,
			},
			"/api": {
				target: "http://192.168.1.22:8080",
				changeOrigin: true,
			},
		},
	},
});
