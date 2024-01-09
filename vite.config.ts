import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'
import vue from '@vitejs/plugin-vue'
// import fs from 'fs'

const esLintConfig = eslint({
  fix: true,
  cache: false
})

const styleLintConfig = stylelint({
  fix: true,
  cache: false
})

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    // Delete the server if you do not use https
    // server: {
    //   https: {
    //     key: fs.readFileSync(process.env.VITE_SSL_KEY_FILE),
    //     cert: fs.readFileSync(process.env.VITE_SSL_CRT_FILE)
    //   }
    // },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [esLintConfig, styleLintConfig, vue()]
  })
}
