import { usePageData } from 'runtime/hooks'
import { HomeFeature } from '../components/HomeFeature'
import { HomeHero } from '../components/HomeHero'

export function HomeLayout() {
  const { frontmatter } = usePageData()

  return (
    <div className="pt-nav">
      <HomeHero hero={frontmatter?.hero}></HomeHero>
      <HomeFeature features={frontmatter?.features}></HomeFeature>
    </div>
  )
}
