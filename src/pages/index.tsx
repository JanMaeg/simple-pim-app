import { useQuery } from '@tanstack/react-query'
import { InferGetServerSidePropsType } from 'next'

import {
  Text,
  LoadingScreen,
  PageWrapper,
  Link,
  Table,
  Column,
} from '@/components'
import useMakairaApp from '@/makaira/useMakairaApp'
import { withMakaira } from '@/makaira/withMakaira'
import { Product } from '@/types/product'

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { token, client: makairaClient } = useMakairaApp()

  const { isLoading, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('/api/product')

      return (await response.json()) as Promise<Product[]>
    },
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
      <Table
        data={products ?? []}
        rowKey="id"
        onRowClick={(product: Product) => {
          console.log(product.id)
        }}
        showRightArrow
      >
        <Column
          dataIndex="title"
          title="Produkt-Name"
          key="title"
          render={(value) => <Text size="bravo">{value}</Text>}
        />
        <Column
          dataIndex="url"
          title="URL"
          key="url"
          render={(value) => <Text size="bravo">{value}</Text>}
        />
      </Table>
    </PageWrapper>
  )
}

export const getServerSideProps = withMakaira()
