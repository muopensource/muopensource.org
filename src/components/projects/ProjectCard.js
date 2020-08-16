/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

function shorten(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "")
}

export const ProjectCard = ({ data }) => {
  const { name, description, url } = data.node

  const allTopics = data.node.repositoryTopics.edges

  console.log(data)
  return (
    <div>
      <Styled.a href={url}>
        <div
          sx={{
            width: ["100%", `390px`],
            height: `180px`,
            bg: "#fff",
            borderRadius: `5px`,
            color: "#000",
            border: `1px solid #efefef`,
            p: 4,
            transition: `border 0.2s ease-in-out`,
            ":hover": {
              border: `1px solid #000`,
            },
            position: `relative`,
          }}
        >
          <Styled.h3 sx={{ fontSize: 16 }}>{name}</Styled.h3>
          <Styled.p sx={{ p: `0` }}>{shorten(description, 70)}</Styled.p>
          <div
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: `wrap`,
              p: 0,
              m: 0,
              position: "absolute",
              bottom: `1rem`,
            }}
          >
            {/* filter the first 5 topics first */}
            {allTopics.slice(0, 5).map(el => {
              return (
                <Styled.p
                  key={el.node.topic.name}
                  sx={{
                    mb: `5px`,
                    fontSize: `12px`,
                    fontWeight: "500",
                    p: `0 8px`,
                    m: `10px 5px 0 0`,
                    border: ` 1px solid transparent`,
                    borderRadius: `2rem`,
                    color: `#0366d6`,
                    bg: `#f1f8ff`,
                  }}
                >
                  {el.node.topic.name}
                </Styled.p>
              )
            })}
          </div>
        </div>
      </Styled.a>
    </div>
  )
}
