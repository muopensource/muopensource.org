/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
// import MuLogo from "../images/mu-color-logo.png"
const Hero = () => {
  return (
    <div>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Styled.h1> Open Source Project.</Styled.h1>
      </div>
    </div>
  )
}

export default Hero
