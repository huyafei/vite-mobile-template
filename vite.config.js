import { defineConfig, loadEnv } from "vite";
import path from "path";

import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log("command", command);
  console.log("mode", mode);
  const config = {
    // 开发或生产环境服务的公共基础路径
    base: loadEnv(mode, process.cwd()).VITE_PROJECT_BASE,
    build: {
      outDir: "dist",
    },
    // 开发服务器配置
    server: {
      https: false, // 是否开启 https
      open: false, // 是否自动在浏览器打开
      port: 9527, // 开发服务器端口号
      // 可以被手机访问的地址
      // host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://example-development.com", // 代理后台接口
          changeOrigin: true,
          // secure: false, // 如果是https接口，需要配置这个参数
          // ws: true, //websocket支持
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
        "@": path.resolve(__dirname, "src"),
        "@api": path.resolve(__dirname, "src/api"),
        "@components": path.resolve(__dirname, "src/components"),
        "@plugins": path.resolve(__dirname, "src/plugins"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@views": path.resolve(__dirname, "src/views"),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `
                @import "${path.resolve(
            __dirname,
            "src/assets/styles/less/base.less"
          )}";
                @import "${path.resolve(
            __dirname,
            "src/assets/styles/less/mixin.less"
          )}";`,
        },
      },
    },
    // 引入第三方的配置
    optimizeDeps: {
      include: [],
    },
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
  };
  if (mode === "production") {
    config.build.terserOptions = {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    };
  }
  return config;
});
