import React from "react"
import { Fieldset } from "@zeit-ui/react"
const BlogDisplay = () => {
  return (
    <div>
      <Fieldset>
        <Fieldset.Title>The Evil Rabbit Jumped over the Fence</Fieldset.Title>
        <Fieldset.Subtitle>
          The Evil Rabbit Jumped over the Fence
        </Fieldset.Subtitle>
        <Fieldset.Footer>
          <Fieldset.Footer.Status>
            The Evil Rabbit Jumped over the Fence
          </Fieldset.Footer.Status>
          <Fieldset.Footer.Actions>
            <Button auto size="mini">
              Actions
            </Button>
          </Fieldset.Footer.Actions>
        </Fieldset.Footer>
      </Fieldset>
    </div>
  )
}

export default BlogDisplay
