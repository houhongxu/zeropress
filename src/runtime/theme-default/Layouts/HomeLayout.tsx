import { usePageData } from 'runtime/hooks'
import { HomeHero } from '../components/HomeHero'

export function HomeLayout() {
  const { frontmatter } = usePageData()

  return (
    <div className="mt-56px">
      首页
      <HomeHero></HomeHero>
    </div>
  )
}
