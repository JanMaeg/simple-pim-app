import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { PageWrapper, TextInput } from '@/components'
import { withMakaira } from '@/makaira/withMakaira'

const schema = yup
  .object({
    title: yup.string().required('Titel wird benötigt'),
    url: yup
      .string()
      .matches(
        /^\/[a-z0-9\/\-]+$/,
        'Muss mit einem Schrägstrich beginnen und nur kleingeschriebene alphanumerische Zeichen beinhalten'
      )
      .required('URL wird benötigt'),
  })
  .required()
type FormData = yup.InferType<typeof schema>

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <PageWrapper title="Neues Produkt" prefix="Du erstellst">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput label="Titel" error={errors.title} {...register('title')} />

        <TextInput
          label="URL"
          description="URL, unter welcher dein Produkt erreichbar sein soll"
          error={errors.url}
          {...register('url')}
        />

        <input type="submit" />
      </form>
    </PageWrapper>
  )
}

export const getServerSideProps = withMakaira()
