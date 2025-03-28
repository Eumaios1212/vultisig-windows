import { ValueProp } from '@lib/ui/props'
import { SVGProps } from 'react'

import { Match } from '../../../../lib/ui/base/Match'
import { DeviceType } from '../../../../mpc/localPartyId'
import { DesktopIcon } from './DesktopIcon'
import { PhoneIcon } from './PhoneIcon'
import { ServerIcon } from './ServerIcon'
import { TabletIcon } from './TabletIcon'

export const KeygenDeviceIcon = ({
  value,
  ...props
}: SVGProps<SVGSVGElement> & ValueProp<DeviceType>) => {
  return (
    <Match
      value={value}
      desktop={() => <DesktopIcon {...props} />}
      phone={() => <PhoneIcon {...props} />}
      tablet={() => <TabletIcon {...props} />}
      server={() => <ServerIcon {...props} />}
    />
  )
}
