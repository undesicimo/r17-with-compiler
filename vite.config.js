import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ReactCompilerConfig = { runtimeModule: "react-compiler-runtime" }; // 👈react-compiler-runtimeを設定

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
			},
		}),
	],
});
