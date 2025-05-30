import { getKeysignMessagePayload } from '@core/mpc/keysign/keysignPayload/KeysignMessagePayload'
import { KeysignCustomMessageInfo } from '@core/ui/mpc/keysign/custom/KeysignCustomMessageInfo'
import { JoinKeysignSwapTxInfo } from '@core/ui/mpc/keysign/join/tx/JoinKeysignSwapTxInfo'
import { JoinKeysignTxPrimaryInfo } from '@core/ui/mpc/keysign/join/tx/JoinKeysignTxPrimaryInfo'
import { useCoreViewState } from '@core/ui/navigation/hooks/useCoreViewState'
import { MatchRecordUnion } from '@lib/ui/base/MatchRecordUnion'
import { useMemo } from 'react'

export const JoinKeysignTxOverview = () => {
  const [{ keysignMsg }] = useCoreViewState<'joinKeysign'>()

  const keysignPayload = useMemo(
    () => getKeysignMessagePayload(keysignMsg),
    [keysignMsg]
  )

  return (
    <MatchRecordUnion
      value={keysignPayload}
      handlers={{
        keysign: payload =>
          payload.swapPayload.value ? (
            <JoinKeysignSwapTxInfo value={payload} />
          ) : (
            <JoinKeysignTxPrimaryInfo value={payload} />
          ),
        custom: value => <KeysignCustomMessageInfo value={value} />,
      }}
    />
  )
}
