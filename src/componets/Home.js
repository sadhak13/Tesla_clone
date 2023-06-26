import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order online for Touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model Y"
        description="Order online for Touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model S"
        description="Order online for Touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model X"
        description="Order online for Touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  )
}
export default Home
const Container=styled.div`
height: 100vh;
`