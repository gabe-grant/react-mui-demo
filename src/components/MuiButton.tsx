import { useState } from "react";

import { IconButton, Stack, Button, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export const MuiButton = () => {

  // for handling multiple selections (i.e. selecting multiple toggles), useState<string[]>([]) intialize as a string array and parameter
  const  [formats, setFormats] = useState<string | null>(null);
  console.log({
    formats
  });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>, 
    // updatedFormats: string[]) => {
    updatedFormats: string | null) => {
    setFormats(updatedFormats);
  }
  // the three button variants are obvi rendered as <button> tags in html
  // in the case of the text variant, it can be used as a link and is rendered as an <a> tag 
  // disableElevation is a prop that disables the design that pops the button on hover
  // disableRipple does the same for the click efffect

  // Stack is ideal for one-dimensional layouts, while Grid is preferable when you need both vertical and horizontal arrangement. defaults to column
  // display="flex" is the default value for the Stack component and display

  // endIcon and startIcon prop allows you to specify which side of the text you want the icon to show
  // IconButton component allows you to render icons as buttons without text

  // Button Groups allow you to align content left, center, or right.
  // when using a button group it is important to add the variant to the button group not the indv. button (unlike onClick)

  // want to do toggle? Use ToggleButtonGroup and ToggleButton!
  // exclusive is a prop that ensures only one ToggleButton is toggled at a time. Changes will need to be made to state to accomodate.
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
      
      <Stack direction='row'>
        <ButtonGroup 
          variant="outlined"
          orientation="vertical"
          size="small" color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={()=>alert('Clicked')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup 
          value={formats} 
          aria-label="text formatting"
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}
