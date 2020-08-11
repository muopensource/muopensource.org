import { Card } from "@zeit-ui/react"
import React from "react"
import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    name: "Finite State Machines",
    desc:
      "The math behind finite state machines with a deep dive of abstraction layers",
  },
  {
    name: "Finite State Machines",
    desc:
      "The math behind finite state machines with a deep dive of abstraction layers",
  },
  {
    name: "Finite State Machines",
    desc:
      "The math behind finite state machines with a deep dive of abstraction layers",
  },
  {
    name: "Finite State Machines",
    desc:
      "The math behind finite state machines with a deep dive of abstraction layers",
  },
  {
    name: "Finite State Machines",
    desc:
      "The math behind finite state machines with a deep dive of abstraction layers",
  },
  {
    name: "Finite State Machines",
    desc:
      "The math behind finite state machines with a deep dive of abstraction layers",
  },
]

const Display = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {projects.map(proj => {
        return <ProjectCard data={proj} />
      })}
    </div>
  )
}

export default Display
