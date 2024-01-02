import { useState } from "react"
import { Label } from "@mui/icons-material"
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material"

export const MuiRadioButton = () => {
  const [value, setValue] = useState('');
  console.log({value});
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job_experience_group_label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job_experience_group"
          aria-labelledby="job_experience_group_label"
          value={value}
          onChange={handleRadioChange}
          row
          >
          <FormControlLabel control={<Radio size="small" color="secondary" />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid</FormHelperText>
      </FormControl>
    </Box>
  )
}
