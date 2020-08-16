/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

function shorten(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "")
}

export const ProjectCard = ({ data }) => {
  const { name, description, url } = data.node
  return (
    <div>
      <Styled.a href={url}>
        <div
          sx={{
            width: ["100%", `350px`],
            height: `150px`,
            bg: "#fff",
            borderRadius: `5px`,
            color: "#000",
            border: `1px solid #efefef`,
            p: 4,
            transition: `border 0.2s ease-in-out`,
            ":hover": {
              border: `1px solid #000`,
            },
          }}
        >
          <Styled.h3 sx={{ fontSize: 16 }}>{name}</Styled.h3>
          <Styled.p sx={{ mt: 2 }}>{shorten(description, 70)}</Styled.p>
        </div>
      </Styled.a>
    </div>
  )
}
