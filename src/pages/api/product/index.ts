import handleProductCreate from '@/server/product/handle-product-create'
import handleProductList from '@/server/product/handle-product-list'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      return handleProductCreate(req, res)

    case 'GET':
      return handleProductList(req, res)

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      )
  }
}
