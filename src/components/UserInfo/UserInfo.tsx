import { FC, ReactNode, useId } from 'react'
import cx from 'classnames'

import { PROGRAMMING_SKILLS } from '../../lib/constants'
import { SkillBadge } from '../Badge'
import avatar from '../../assets/images/avatar-man.png'
import { Button } from '../Button'
import { Card } from '../Card'
import { UserInfoProps } from './UserInfo.interface'
import { CrownIcon, InfoIcon } from '../Icons'

const UserRank: FC = () => {
  return (
    <Card className="mt-6 flex h-[4.125rem] w-[17.3125rem] items-center gap-x-3 px-3 py-[0.8125rem]">
      <div className="inline-block rounded-full bg-[#229BE033] px-[8.75px] pb-[12.5px] pt-[10.25px]">
        <CrownIcon />
      </div>
      <div>
        <div className="flex items-center gap-x-[5.33px] text-sm text-zeedas-text-gray">
          Rank <InfoIcon />
        </div>
        <div className="leading-[21.82px] text-zeedas-text-dark">
          Senior Frontend Developer
        </div>
      </div>
    </Card>
  )
}

export const UserInfo: FC<UserInfoProps> = ({
  showFollowButton,
  showRank,
  avatarSize = 124,
}) => {
  const idPrefix = useId()

  return (
    <>
      <div className="item-center mb-6 flex justify-between">
        <img
          src={avatar}
          alt="user-avatar"
          width={avatarSize}
          height={avatarSize}
        />
        <div className="flex flex-col items-end justify-center gap-y-2">
          <Button primary className={showFollowButton ? '' : 'h-[45px]'}>
            Contact me
          </Button>
          {showFollowButton && <Button default>Follow</Button>}
        </div>
      </div>
      <div
        className={cx(
          showFollowButton ? 'font-extrabold' : 'font-normal',
          'mb-2 text-2xl leading-7 text-zeedas-text-primary'
        )}
      >
        Adeyemi Oluwafemi
      </div>
      <div className="mb-6 text-sm font-light leading-[21px] tracking-[-0.01rem] text-zeedas-text-secondary">
        I’m a talented full-stack developer with a passion for building
        high-quality, scalable, and maintainable web applications. With my
        extensive experience working with popular frameworks such as Spring,
        Django, and React.
      </div>
      <div className="flex flex-wrap gap-3">
        {PROGRAMMING_SKILLS.map(
          ({ color, icon: Icon, id, language, percent, textColor }) => {
            const iconNode: ReactNode =
              typeof Icon === 'string' ? (
                <img src={Icon} alt={language} width={20} height={20} />
              ) : (
                <Icon />
              )
            return (
              <SkillBadge
                key={idPrefix + id}
                icon={iconNode}
                percent={percent}
                text={language}
                className={color}
                textColor={textColor}
              />
            )
          }
        )}
      </div>
      {showRank && <UserRank />}
    </>
  )
}
