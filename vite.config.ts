import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "./src/components"),
			name: "React UI StoryBook TailwindCss",
			fileName: "react-ui-storybook-tailwindcss"
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM"
				}
			}
		}
	},
	plugins: [react(), dts({ rollupTypes: true })]
});
