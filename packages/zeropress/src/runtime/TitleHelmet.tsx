import { PageData } from '@/shared/types'
import { splitIndex } from '@/shared/utils'
import { HelmetData, HelmetProvider, Helmet } from 'react-helmet-async'

export function TitleHelmet({
  pageData,
  helmetContext,
}: {
  pageData?: PageData
  helmetContext?: HelmetData['context']
}) {
  const rawDocTitle = pageData?.pagePath.split('/').at(-1)?.split('.')[0]

  const docTitle = decodeURI(splitIndex(rawDocTitle).text)

  // node端兼容react-helmet-async的cjs包

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>
          {(docTitle ? `${docTitle} | ` : '') + pageData?.userConfig.title}
        </title>
      </Helmet>
    </HelmetProvider>
  )
}
