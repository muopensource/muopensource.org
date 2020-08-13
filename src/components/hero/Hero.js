import { Text } from "@zeit-ui/react"
import React from "react"

const Hero = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "3rem",

          display: "grid",
          placeItems: "center",
        }}
      >
        <img
          width="210px"
          src="https://iili.io/dVIzUQ.png"
          alt="kisspng university of manchester manchester university man 5af4370cd30b19.4516330015259543168644"
          border="0"
        ></img>

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
