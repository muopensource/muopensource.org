import React from "react"
import { Text, Avatar, Link, Tooltip } from "@zeit-ui/react"

const contributors = [
  {
    name: "zaidmasri2",
    link:
      "https://avatars1.githubusercontent.com/u/61603036?s=460&u=16dd805d5720f78c88838b5ef4c32b9559ebdc56&v=4",
  },
  {
    name: "hawyar",
    link:
      "https://avatars0.githubusercontent.com/u/42186608?s=460&u=c820fb56d712e57fe87e037c99a83a588916b5da&v=4",
  },
]
const Footer = () => {
  return (
    <div>
      <footer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "0.875rem",
          }}
        >
          <Text
            size="0.875rem"
            style={{
              padding: "0",
              fontWeight: "500",
              marginRight: "1rem",
            }}
          >
            Contributers
          </Text>
          <div>
            <Avatar.Group>
              <Tooltip text={contributors[0].name}>
                <Link href={`https://github.com/${contributors[0].name}`} color>
                  <Avatar src={contributors[0].link} stacked />{" "}
                </Link>
              </Tooltip>
              <Tooltip text={contributors[1].name}>
                <Link color href={`https://github.com/${contributors[1].name}`}>
                  <Avatar src={contributors[1].link} stacked />{" "}
                </Link>
              </Tooltip>
            </Avatar.Group>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
