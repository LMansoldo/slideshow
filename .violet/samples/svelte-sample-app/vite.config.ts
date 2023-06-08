import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, mergeConfig, type UserConfig } from 'vite'

const defaultConfig: UserConfig = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
}

const modeConfig: Record<string, UserConfig> = {
	development: {
		server: {
			port: 3000,
			fs: {
				allow: ['..'],
			},
		},
		optimizeDeps: {
			exclude: ['orbit-uilib'],
		},
	},
}

export default defineConfig(({ mode }) =>
	mergeConfig(defaultConfig, modeConfig[mode] ?? {}, false)
)
