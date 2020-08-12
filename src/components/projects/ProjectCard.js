import React from "react"
import { Card, Link, Text } from "@zeit-ui/react"
export const ProjectCard = ({ data }) => {
  const { name, desc } = data

  return (
    <div style={{ margin: "1.4rem 1rem" }}>
      <Link color href="/">
        <Card width="350px" hoverable>
          <Text h2 size="1.245rem">
            {name}
          </Text>
          <Text p style={{ marginTop: "0.875rem" }}>
            {desc}
          </Text>
        </Card>
      </Link>
    </div>
  )
}
