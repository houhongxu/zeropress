import { HomeFeature } from '../components/HomeFeature'
import { HomeHero } from '../components/HomeHero'
import { usePageData } from '../../hooks/usePageData'

export function HomeLayout() {
  const { frontmatter } = usePageData()

  return (
    <div>
      <HomeHero hero={frontmatter?.hero}></HomeHero>
      <HomeFeature features={frontmatter?.features}></HomeFeature>
    </div>
  )
}
