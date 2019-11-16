import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Form } from './Form';

export const App = () => {
  return (
    <div className="form-page">
      <div className="form-page-container">
        <Typography id="form-title" className="center-text" variant="h1">
          Valentine's Day 2019
        </Typography>
        <hr />
        <div id="form-description">
          <Typography className="center-text" variant="p">
            Please fill out this form for Case Men's Glee Club to sing for you
            on Valentine's Day!
          </Typography>
          <Typography className="center-text red-text" variant="p">
            * Required
          </Typography>
          <Form />
        </div>
      </div>
    </div>
  );
};
