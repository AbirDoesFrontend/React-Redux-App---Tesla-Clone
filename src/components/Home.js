import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
        title='Model S'
        description='Online Order For Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtntext='Custom Order'
        rightBtnText='Existing Order'
      />

      <Section 
        title='Model Y'
        description='Online Order For Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtntext='Custom Order'
        rightBtnText='Existing Order'
      />

      <Section 
        title='Model 3'
        description='Online Order For Touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtntext='Custom Order'
        rightBtnText='Existing Order'
      />

      <Section 
        title='Model X'
        description='Online Order For Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtntext='Custom Order'
        rightBtnText='Existing Order'
      />

      <Section 
        title='Lowest Cost Solar Panels In America'
        description='Money-back Guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtntext='Order Now'
        rightBtnText='Learn Now'
      />

      <Section 
        title='Solar For New Roofs'
        description='Solar Roofs Costs Less Than A New Roof Plus Panels'
        backgroundImg='solar-roof.jpg'
        leftBtntext='Order Now'
        rightBtnText='Learn Now'
      />

      <Section 
        title='Accessories'
        backgroundImg='accessories.jpg'
        leftBtntext='Shop Now'
      />
     </Container>
  )
}

export default Home

const Container = styled.div`
 height: 100vh;
`