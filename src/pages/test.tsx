import { InferGetServerSidePropsType } from 'next'

import { PageWrapper, Link } from '@/components'
import { withMakaira } from '@/makaira/withMakaira'

export default function Test() {
  return (
    <PageWrapper title="Super tolles Produkt" prefix="Du bearbeitest">
      <Link pathname="/">Zur Testseite</Link>
    </PageWrapper>
  )
}

export const getServerSideProps = withMakaira()
