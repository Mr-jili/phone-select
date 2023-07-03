import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import sass from 'sass'

export default defineConfig({
    transpileDependencies: ['@dcloudio/uni-ui', 'luch-request'],
    plugins: [
        uni(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
    },
})
