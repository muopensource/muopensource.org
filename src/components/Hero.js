import React from "react"
import MuLogo from "../images/mu-color-logo.png"
import { Styled } from "theme-ui"
const Hero = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ maxWidth: `210px`, marginBottom: `1.45rem` }}>
          <img src={MuLogo} alt="Manchester University" />
        </div>

        <Styled.h1> Open Source Project.</Styled.h1>

        <div
          style={{ maxWidth: "540px", marginTop: "2rem", textAlign: "center" }}
        >
          <Styled.p>
            Our mission is to make cloud computing accessible to everyone. We
            build products for developers and designers. And those who aspire to
            become one. We build products for developers and designers. And
            those who aspire to become one.
          </Styled.p>
        </div>
      </div>
    </div>
  )
}

export default Hero
