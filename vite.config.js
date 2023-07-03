import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

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
