/** @jsx jsx */
import { jsx } from "theme-ui"
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
          alt="Manchester University Crest Logo"
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
