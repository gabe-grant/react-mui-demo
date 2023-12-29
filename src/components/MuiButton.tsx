import { IconButton, Stack, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {

  // the three button variants are obvi rendered as <button> tags in html
  // in the case of the text variant, it can be used as a link and is rendered as an <a> tag 
  // disableElevation is a prop that disables the design that pops the button on hover
  // disableRipple does the same for the click efffect

  // Stack is ideal for one-dimensional layouts, while Grid is preferable when you need both vertical and horizontal arrangement. defaults to column
  // display="flex" is the default value for the Stack component and display

  // endIcon and startIcon prop allows you to specify which side of the text you want the icon to show
  // IconButton component allows you to render icons as buttons without text
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">secondary</Button>
        <Button variant="contained" color="error">error</Button>
        <Button variant="outlined" color="warning">warning</Button>
        <Button variant="text" color="info">info</Button>
        <Button variant="text" color="success">success</Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">large</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={()=>alert("Clicked")}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>Send</Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
