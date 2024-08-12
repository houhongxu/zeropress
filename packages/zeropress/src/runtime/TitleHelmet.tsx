import { PageData } from '@/shared/types'
import { splitIndex } from '@/shared/utils'
import { Helmet } from 'react-helmet-async'

export function TitleHelmet({ pageData }: { pageData?: PageData }) {
  const rawDocTitle = pageData?.pagePath.split('/').at(-1)?.split('.')[0]

  const docTitle = decodeURI(splitIndex(rawDocTitle).text)

  return (
    <Helmet>
      <title>
        {(docTitle ? `${docTitle} | ` : '') + pageData?.userConfig.title}
      </title>
    </Helmet>
  )
}
