import React from 'react'
import Badge, { BadgeProps, badgeColor } from './index'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { Icon } from '../icon'

type selectType = 'positive' | 'negative' | 'neutral' | 'warning' | 'error'

export default {
  title: '组件/Badge',
  component: Badge,
  decorators: [withKnobs]
}

export const knobsBadge = () => (
  <Badge status={select<BadgeProps['status']>('status', Object.keys(badgeColor) as selectType[], 'neutral')}>
    {text('children', 'i am badge')}
  </Badge>
)

export const all = () => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
  </div>
)

export const withIcon = () => (
  <Badge status="warning">
    <Icon icon="check" />
    with icon
  </Badge>
)
