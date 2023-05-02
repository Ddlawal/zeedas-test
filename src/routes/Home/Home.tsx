import { FC } from 'react'

import { UserInfo } from '../../components/UserInfo'
import { PrimaryLayout } from '../../layout/PrimaryLayout'

export const Home: FC = () => {
  return (
    <PrimaryLayout className="px-[27.25rem]">
      <UserInfo showFollowButton />
    </PrimaryLayout>
  )
}
