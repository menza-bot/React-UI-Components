import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
`

const Window = styled.div`
  width: 500px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
`

const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`

const First = styled.div`
  height: 100%;
  border-radius: 15px;
  min-width: 500px;
  background-color: red
`

const Second = styled.div`
  height: 100%;
  border-radius: 15px;
  min-width: 500px;
  background-color: yellow
`

const Third = styled.div`
  height: 100%;
  border-radius: 15px;
  min-width: 500px;
  background-color: green
`

export const Carousel = () => {
  return( 
    <Wrapper>
      <Window>
        <ItemWrapper>
          <First />
          <Second />
          <Third />
        </ItemWrapper>
      </Window>
    </Wrapper>
  )
}