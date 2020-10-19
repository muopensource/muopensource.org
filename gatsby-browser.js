import React from "react"
import CssBaseline from "@zeit-ui/react/esm/css-baseline"
import ZeitProvider from "@zeit-ui/react/esm/zeit-provider"

const customZeitTheme = {
  palette: {
    selection: "#eeb111",
  },
}

export const wrapPageElement = ({ element }) => (
  <div>
    <ZeitProvider theme={customZeitTheme}>
      <CssBaseline />
      {element}
    </ZeitProvider>
  </div>
)
