import React from 'react';
import {
  TextField,
  FormControl,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(3.5),
  },
}));

export const Form = () => {
  const classes = useStyles();

  return (
    <div id="form-container">
      {/* Case ID */}
      <FormControl className={classes.formControl}>
        <Typography>What is your Case ID? *</Typography>
        <TextField required label="Case ID" helperText="i.e. abc123" />
      </FormControl>
      {/* Sender Name */}
      <FormControl className={classes.formControl}>
        <Typography>
          What name would you like credited as the valentine's sender?
        </Typography>
        <TextField
          label="Sender's name"
          helperText="i.e. Your Honey Boo Boo. Leave blank to remain anonymous!"
        />
      </FormControl>
      {/* Song Selection */}
      <FormControl className={classes.formControl}>
        <Typography>What song would you like us to sing? *</Typography>
        <Select>
          <MenuItem>Can't Help Falling In Love</MenuItem>
          <MenuItem>Can You Feel the Love Tonight?</MenuItem>
        </Select>
        <FormHelperText>Select a song</FormHelperText>
      </FormControl>
      {/* Valentine Package */}
      <FormControl className={classes.formControl}>
        <Typography>Choose your Singing Valentine package *</Typography>
        <RadioGroup defaultValue="standard">
          <FormControlLabel
            value="standard"
            control={<Radio />}
            label="Standard Package"
          />
          <FormControlLabel
            value="deluxe"
            control={<Radio />}
            label="Deluxe Package"
          />
          <FormHelperText>
            Standard Package - a verbal delivery of the singing valentine with a
            short performance by CMGC.
          </FormHelperText>
          <FormHelperText>
            Deluxe Package - a personalized hand-delivered valentine with a long
            stem chocolate rose along with a short performance by CMGC
          </FormHelperText>
        </RadioGroup>
      </FormControl>
      {/* Upcoming Performances */}
      <FormControl className={classes.formControl}>
        <Typography>
          Would you like us to contact you about upcoming Case Men's Glee Club
          performances? *
        </Typography>
        <RadioGroup defaultValue="yes">
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
