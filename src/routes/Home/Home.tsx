import { FC } from 'react'

import { UserInfo } from '../../components/UserInfo'
import { PrimaryLayout } from '../../layout/PrimaryLayout'
import { Timeline } from '../../components/Timeline'

export const Home: FC = () => {
  return (
    <PrimaryLayout className="mb-20 px-[27.25rem]">
      <UserInfo showFollowButton />
      <Timeline />
    </PrimaryLayout>
  )
}
