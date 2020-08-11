import React from "react"
import { ZeitProvider, CssBaseline } from "@zeit-ui/react"

export const wrapRootElement = ({ element }) => (
  <div>
    <ZeitProvider>
      <CssBaseline />
      {element}
    </ZeitProvider>
  </div>
)
