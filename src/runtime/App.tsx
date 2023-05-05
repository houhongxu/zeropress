// react应用，导入不可以用baseUrl路径简化，因为runtime文件夹内容并未由ts打包，而是由vite-build构建

import { MainLayout } from 'runtime/default-theme/Layouts/MainLayout'

export function App() {
  return <MainLayout></MainLayout>
}
