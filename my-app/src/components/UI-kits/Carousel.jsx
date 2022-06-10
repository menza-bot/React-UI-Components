import React, { useState } from 'react'
import styled from 'styled-components'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

const SliderWrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
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
  transform: translate(${props => props.currentToggle + 'px'});
  transition: .4s
`

const First = styled.div`
  height: 100%;
  border-radius: 15px;
  min-width: 500px;
  background-color: red;
`

const Second = styled.div`
  height: 100%;
  border-radius: 15px;
  min-width: 500px;
  background-color: yellow;
`

const Third = styled.div`
  height: 100%;
  border-radius: 15px;
  min-width: 500px;
  background-color: green
`

export const Carousel = () => {

  const [itemWidth] = useState(500)
  const [currentToggle, setCurrentToggle] = useState(0)

  return( 
      <SliderWrapper>
        <CgChevronLeft onClick={() => setCurrentToggle(currentToggle === 0 ? currentToggle - 1000 : currentToggle + 500)} />
        <Window itemWidth = {itemWidth}>
          <ItemWrapper currentToggle = {currentToggle}>
            <First itemWidth = {itemWidth} />
            <Second itemWidth = {itemWidth} />
            <Third itemWidth = {itemWidth} />
          </ItemWrapper>
        </Window>
        <CgChevronRight onClick={() => setCurrentToggle(currentToggle === -1000 ? currentToggle + 1000 : currentToggle - 500)} />
      </SliderWrapper>
  )
}