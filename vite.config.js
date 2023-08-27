import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig((mode) => {
    const env = loadEnv(mode, process.cwd())
    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@css': path.resolve(__dirname, './src/assets/css'),
                '@img': path.resolve(__dirname, './src/assets/img'),
                '@font': path.resolve(__dirname, './src/assets/fonts')
            },
            extensions: ['.js', '.css', '.svg', '.jpg']
        },
        plugins: [
            // 替换根目录下index.html文件中的变量
            createHtmlPlugin({
                minify: true,//是否压缩 html
                inject: {
                    data: {
                        title: env.VITE_APP_TITLE,
                    },
                }
            })
        ]
    }
})