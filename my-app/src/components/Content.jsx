import React from 'react'
import styled from 'styled-components'

const UIElement = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

export const Content = () => {

  return(
    <UIElement>
      This is UI-kit!
    </UIElement>
  )
}