/** @jsx jsx */
import { jsx } from "theme-ui"
import { ProjectCard } from "./ProjectCard"
import { graphql, useStaticQuery } from "gatsby"

const ProjectDisplay = () => {
  const data = useStaticQuery(graphql`
    query MURepos {
      allGithubOrganization(limit: 5) {
        edges {
          node {
            name
            repositories {
              edges {
                node {
                  id
                  description
                  name
                  url
                  repositoryTopics {
                    edges {
                      node {
                        topic {
                          name
                          id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const allRepo = data.allGithubOrganization.edges[0].node.repositories.edges
  return (
    <div
      sx={{
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "1fr 1fr",
        "@media screen and (max-width: 574px)": {
          gridTemplateColumns: "1fr",
        },
        mb: 6,
        mt: 6,
        rowGap: 4,
        columnGap: 4,
      }}
    >
      {allRepo.map(repo => {
        return <ProjectCard data={repo} key={repo.node.id} />
      })}
    </div>
  )
}

export default ProjectDisplay
