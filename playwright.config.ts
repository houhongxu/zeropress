import type { PlaywrightTestConfig } from '@playwright/test'

// 1. 脚本创建测试项目
// 2. 脚本启动测试项目
// 3. playwright开启无头浏览器进行访问
const config: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 10000,
  webServer: {
    url: 'http://localhost:5173', // 注意端口占用时会一直卡死
    command: 'pnpm prepare:e2e',
  },
  use: {
    headless: true, // 无ui界面的无头浏览器
  },
}

export default config
