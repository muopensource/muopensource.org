import { Text } from "@zeit-ui/react"
import React from "react"
import MuLogo from "../../images/mu-color-logo.png"
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

        <Text h1 size="2.245rem">
          Open Source Project.
        </Text>

        <div
          style={{ maxWidth: "540px", marginTop: "2rem", textAlign: "center" }}
        >
          <Text p>
            Our mission is to make cloud computing accessible to everyone. We
            build products for developers and designers. And those who aspire to
            become one. We build products for developers and designers. And
            those who aspire to become one.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Hero
