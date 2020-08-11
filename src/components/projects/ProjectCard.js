import React from "react"
import { Card, Text } from "@zeit-ui/react"
export const ProjectCard = ({ data }) => {
  const { name, desc } = data

  return (
    <div style={{ margin: "2rem 2rem" }}>
      <Card width="350px">
        <Text h2 size="1.245rem">
          {name}
        </Text>
        <Text p style={{ marginTop: "1rem" }}>
          {desc}
        </Text>
      </Card>
    </div>
  )
}
