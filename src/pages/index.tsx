import { useQuery } from '@tanstack/react-query'
import { InferGetServerSidePropsType } from 'next'

import { Text, LoadingScreen, PageWrapper, Link } from '@/components'
import useMakairaApp from '@/makaira/useMakairaApp'
import { withMakaira } from '@/makaira/withMakaira'

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { token, client: makairaClient } = useMakairaApp()

  const { isLoading, data } = useQuery({
    queryKey: ['feeds'],
    queryFn: async () => await makairaClient.fetchFeeds(),
    enabled: !!token,
  })

  if (!token || isLoading) {
    return <LoadingScreen />
  }

  return (
    <PageWrapper title="Willkommen bei Simple-PIM!">
      <Text element="p">
        Eine Makaira-App, welche es erlaubt Produkte innerhalb von Makaira zu
        verwalten.
      </Text>
      <Link pathname="/test">
        <Text>Zur Testseite</Text>
      </Link>
    </PageWrapper>
  )
}

export const getServerSideProps = withMakaira()
