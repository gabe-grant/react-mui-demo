import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';

export const MuiTextField = () => {

  const [value, setValue] = useState("")
  // default variant is outlined
  // The TextField component is a wrapper around an input component, and we use the InputProps prop to target the underlining input component
  // Adornments act like prefixes and suffixes, they can also be Icons

  // ideally you would want validation with the error prop not on page load, but on blur, which can be done with Formik React js library
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
        <TextField label="name" variant="standard" disabled />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Username" 
          value={value} 
          onChange={e => setValue(e.target.value)} 
          error={!value}
          helperText={!value ? 'Required': 'This must be unique'}
        />
        <TextField 
          label="Password" 
          helperText="Don't share your password" 
          type="password"
          required
          InputProps={{
            endAdornment: <InputAdornment position="end"><VisibilityIcon /></InputAdornment>
          }}
        />
        <TextField label="Read Only" InputProps={ {readOnly: true} } />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField 
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
        <TextField 
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  )
}
