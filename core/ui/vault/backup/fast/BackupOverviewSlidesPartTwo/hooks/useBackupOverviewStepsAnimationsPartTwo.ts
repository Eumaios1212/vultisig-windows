import { useRive } from '@rive-app/react-canvas'

const STATE_MACHINE_NAME = 'State Machine 1'

// @antonio: done for UI purposes (we need to show as if this is the 3rd animation in sequence of 3)

export const useBackupOverviewStepsAnimationsPartTwo = () => {
  const { RiveComponent, rive } = useRive({
    src: '/core/animations/fast-vault-backup-vault.riv',
    autoplay: true,
    stateMachines: [STATE_MACHINE_NAME],
  })

  return {
    animationComponent: RiveComponent,
    isLoading: !rive,
  }
}
