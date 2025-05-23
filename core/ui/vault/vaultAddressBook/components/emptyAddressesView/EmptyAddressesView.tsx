import { Button } from '@lib/ui/buttons/Button'
import { PageHeaderBackButton } from '@lib/ui/page/PageHeaderBackButton'
import { PageHeaderTitle } from '@lib/ui/page/PageHeaderTitle'
import { useTranslation } from 'react-i18next'

import { AddressBookPageHeader } from '../../AddressBookSettingsPage.styles'
import {
  CenteredBox,
  Container,
  ResponsiveText,
  StyledTriangleWarningIcon,
} from './EmptyAddressView.styles'

type EmptyAddressesViewProps = {
  onOpenAddAddressView: () => void
}

const EmptyAddressesView = ({
  onOpenAddAddressView,
}: EmptyAddressesViewProps) => {
  const { t } = useTranslation()

  return (
    <>
      <AddressBookPageHeader
        data-testid="EmptyAddressesView-AddressBookPageHeader"
        primaryControls={<PageHeaderBackButton />}
        title={<PageHeaderTitle>{t('address_book')}</PageHeaderTitle>}
      />
      <Container>
        <CenteredBox>
          <StyledTriangleWarningIcon width={120} height={120} />
          <ResponsiveText weight={700} color="contrast">
            {t('vault_settings_address_book_no_addresses_title')}
          </ResponsiveText>
        </CenteredBox>
        <Button onClick={onOpenAddAddressView}>{t('add_address')}</Button>
      </Container>
    </>
  )
}

export default EmptyAddressesView
