import React from "react"
import { ZeitProvider, CssBaseline } from "@zeit-ui/react"

// override s
const myTheme = {
  palette: {
    selection: "#eeb111",
  },
}

export const wrapRootElement = ({ element }) => (
  <div>
    <ZeitProvider theme={myTheme}>
      <CssBaseline />
      {element}
    </ZeitProvider>
  </div>
)
