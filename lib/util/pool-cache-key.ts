import { Protocol } from '@uniswap/router-sdk'
import { ChainId } from '@eclips3e3/smart-order-router-maistestsubnet-modded'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
