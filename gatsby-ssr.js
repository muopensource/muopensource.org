import React from "react"
import CssBaseline from "@zeit-ui/react/esm/css-baseline"

export const wrapRootElement = ({ element }) => (
  <div>
    <CssBaseline />
    {element}
  </div>
)
