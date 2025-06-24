import react from "@vitejs/plugin-react"
import * as path from "node:path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "./src"),
		},
	},
})
