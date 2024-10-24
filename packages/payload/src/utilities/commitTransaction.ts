import type { PayloadRequest } from '../types/index.js'

/**
 * complete a transaction calling adapter db.commitTransaction and delete the transactionID from req
 */
export async function commitTransaction(req: PayloadRequest): Promise<void> {
  const { payload, transactionID } = req

  await payload.db.commitTransaction(transactionID)
  delete req.transactionID
}
