import React from "react"
import { Text, Avatar, Link } from "@zeit-ui/react"

const contributors = [
  {
    name: "hawyar",
    link:
      "https://avatars0.githubusercontent.com/u/42186608?s=460&u=c820fb56d712e57fe87e037c99a83a588916b5da&v=4",
  },
  {
    name: "zaidmasri2",
    link:
      "https://avatars1.githubusercontent.com/u/61603036?s=460&u=16dd805d5720f78c88838b5ef4c32b9559ebdc56&v=4",
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
              {contributors.map(author => {
                return (
                  <Link
                    key={author.name}
                    href={`https://github.com/${author.name}`}
                    color
                  >
                    <Avatar src={author.link} stacked />{" "}
                  </Link>
                )
              })}
            </Avatar.Group>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
