import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Icon, IconProps } from '../index'
import { icons } from '../../shared/icons'

function IconTest(icon: IconProps['icon']) {
  const wrapper = render(<Icon data-testid="icon-path" icon={icon}></Icon>)
  const path = wrapper.queryByTestId('icon-path')
  expect(path?.firstChild).toHaveAttribute('d', icons[icon])
  cleanup()
}

describe(' test Icon component', () => {
  it('it should render correct icon ', () => {
    Object.keys(icons).forEach(key => {
      IconTest(key as IconProps['icon'])
    })
  })
  it('it should render  block ', () => {
    const wrapper = render(<Icon icon="mobile" data-testid="icon-svg" block></Icon>)
    const svg = wrapper.getByTestId('icon-svg')
    expect(svg).toHaveStyle('display:block')
  })
  it('it should render correct color ', () => {
    let wrapper = render(<Icon data-testid="icon-path" icon="mobile"></Icon>)
    let path = wrapper.queryByTestId('icon-path')
    expect(path).toHaveAttribute('color', 'black')
    cleanup()
    wrapper = render(<Icon data-testid="icon-path" icon="mobile" color="blue"></Icon>)
    path = wrapper.queryByTestId('icon-path')
    expect(path).toHaveAttribute('color', 'blue')
  })
})
