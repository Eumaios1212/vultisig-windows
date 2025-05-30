import { Chain } from '@core/chain/Chain'
import { useVaultChainCoinsQuery } from '@core/ui/vault/queries/useVaultChainCoinsQuery'
import { useTransformQueryData } from '@lib/ui/query/hooks/useTransformQueryData'
import { useCallback } from 'react'

export const useGetTotalAmountAvailableForChain = (chain: Chain) => {
  const coinsQuery = useVaultChainCoinsQuery(chain)

  return useTransformQueryData(
    coinsQuery,
    useCallback(coins => {
      let totalTokenAmount = 0
      let totalCurrencyAmount = 0

      for (const { amount, decimals, price = 0 } of coins) {
        const tokenAmount = Number(amount) / 10 ** decimals
        totalTokenAmount += tokenAmount
        totalCurrencyAmount += tokenAmount * price
      }

      return {
        totalTokenAmount,
        totalCurrencyAmount,
      }
    }, [])
  )
}
