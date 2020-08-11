import React from "react"
import { navigate } from "gatsby"
import { AuthProvider } from "react-use-auth"
import { ZeitProvider, CssBaseline } from "@zeit-ui/react"

export const wrapRootElement = ({ element }) => (
  <div>
    <ZeitProvider>
      <CssBaseline />
      <AuthProvider
        navigate={navigate}
        callback_domain="localhost:8000"
        auth0_domain="dev-bknbekav.us.auth0.com"
        auth0_client_id="qAmr82Pin1sw2kxp9Td9SPbWkpYoX1Ak"
      >
        {element}
      </AuthProvider>
    </ZeitProvider>
  </div>
)
