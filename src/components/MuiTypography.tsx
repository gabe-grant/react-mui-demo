import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    // subtitle variants are rendered as <h6> elements with different styles
    // body variants are rendered as <p> elements

    // the component prop maintains the variant, but changes the element rendered to the DOM - Semantics
    // guttorBottom adds margin and is dependent on the variant - larger variants have more margin than smaller variants (good for page titles or sections)
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum rem ullam. Unde cumque exercitationem repellat nobis dolor dolores fugiat officiis eos asperiores atque praesentium dolore deleniti repudiandae, error excepturi.</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, a fugit tempore error, quos qui aperiam ullam magni quidem sint repudiandae delectus quas atque accusamus sequi? Assumenda ratione rerum hic.</Typography>
    </div>
  )
}
