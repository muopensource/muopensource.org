/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import MuLogo from "../images/mu-color-logo.png"
const Hero = () => {
  return (
    <div>
      <div
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <img
          src={MuLogo}
          sx={{
            width: "270px",
          }}
        />
      </div>
    </div>
  )
}

export default Hero
