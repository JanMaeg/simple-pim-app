import { NextApiRequest, NextApiResponse } from 'next'

import prismaClient from '@/lib/prisma'

const handleProductCreate = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    title,
    price,
    url,
    active = true,
    hidden = false,
    searchable = true,
    stock = 20,
    ean,
  } = req.body

  const product = await prismaClient.product.create({
    data: {
      title,
      price,
      url,
      active,
      hidden,
      searchable,
      stock,
      ean,
    },
  })

  return res.status(201).json(product)
}

export default handleProductCreate
