import { FC } from 'react'

import { UserInfo } from '../../components/UserInfo'
import { PrimaryLayout } from '../../layout/PrimaryLayout'
import { Timeline } from '../../components/Timeline'
import { SelectDropdown } from '../../components/SelectDropdown'

export const Home: FC = () => {
  return (
    <PrimaryLayout className="mx-auto mb-20 w-[40rem]">
      <UserInfo showFollowButton />
      <div className="mt-16 flex justify-between">
        <div className="mb-5 text-lg font-semibold leading-[22px] text-zeedas-text-primary">
          Activity
        </div>
        <SelectDropdown
          options={[
            { id: 1, label: 'Show all' },
            { id: 3, label: 'Badges' },
            { id: 3, label: 'Certificates' },
          ]}
        />
      </div>
      <Timeline />
    </PrimaryLayout>
  )
}
