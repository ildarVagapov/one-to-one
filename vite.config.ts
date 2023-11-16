import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"pages": '/src/pages',
			"widgets": '/src/widgets',
			"shared": '/src/shared',
			"feature": '/src/feature',
			"entities": '/src/entities',
		}
	}
})
