import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"

export const MuiSelect = () => {

  // const [country, setCountry] = useState('')
  const [countries, setCountries] = useState<string[]>([])
  console.log({countries})
  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setCountries(event.target.value as string)
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  }
  // Box is just rendered as a plain old div tag
  // the width keeps the dropdown from expanding the entire page
  // the Select dropdown needs options and this is the MenuItem
  // The TextField component is a wrapper around three components: Select

  // Using select, the width is dependent on the value, so if it's an empty string, then it will be very small. Once you make a new selection it will change, but this is of course not desirable. Since we have a parent (Box) with a fixed width value, we can pass the fullWidth prop to help us in MUI.

  // Steps needed to change the single Select option to a multi-select specify the SelectProps prop
  
  // The more practical usage of the dropdown component would be fetching the list of options from an API and mapping over the array of key/value pairs recieved and rendering the MenuItems in the JSX.
  return (
    <Box width="250px">
      <TextField label="Select country" select value={countries} onChange={handleCountryChange} fullWidth SelectProps={{multiple: true}} size="small" color="success" helperText="please select countries">
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austrailia</MenuItem>
      </TextField>
    </Box>
  )
}
