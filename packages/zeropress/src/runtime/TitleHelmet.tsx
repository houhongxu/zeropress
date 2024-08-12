import { PageData } from '@/shared/types'
import { Helmet } from 'react-helmet-async'

export function TitleHelmet({ pageData }: { pageData: PageData }) {
  return (
    <Helmet>
      <title>{pageData.userConfig.title}</title>
    </Helmet>
  )
}
