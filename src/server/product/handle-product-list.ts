import { NextApiRequest, NextApiResponse } from 'next'

import prismaClient from '@/lib/prisma'

const handleProductCreate = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const products = await prismaClient.product.findMany()

  return res.status(201).json(products)
}

export default handleProductCreate
