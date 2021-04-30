import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Request.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Request Type', 'Upload Request Form', 'Submit'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <div className="container-fluid">
          <p className="text-dark text-center fw-bold fs-5">Kindly Provide Your Request Details</p>
          <form>
            <div className="form-group col-8 mb-5">
                <label className="text-dark mb-3">Select your request type below</label>
                <select className="form-control">
                <option>Request Options</option>
                <option>Demat request</option>
                <option>E-mandate Form</option>
                <option>Request for outstanding dividend</option>
                <option>Request for outstanding shares</option>
                <option>Change of Name/Address</option>
                <option>Request for statement of account</option>
                <option>Request for Consolidating Accounts</option>
                </select>
                <br/>
                <label className="text-dark mb-3">Provide your valid E-mail Address</label>
                <input className="form-control" type="text" id="email" name="email" required placeholder="Enter Email Address"></input>
            </div>
          </form>
      </div>;
    case 1:
      return <div className="container-fluid">
        <p className="text-dark text-center fw-bold fs-5">Upload all neccessary decuments</p>
        <div className="col-8 text-left">
          <label className="text-dark mb-3">Upload Your Request Form Below</label>
          <div className="input-group">
           <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
          </div> 
          <label className="text-dark mb-3 mt-4">Upload Other Supporting Documents Below</label>
          <div className="input-group mb-4">
           <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
          </div>
        </div>        
      </div>;
    case 2:
      return <div className="mb-5">
          <label className="container text-dark">
            <input type="checkbox" />
            <span className="checkmark submit-label">Do you agree that your details should be kept for future reference</span>
          </label>
          <label className="container text-dark mt-4">
            <input type="checkbox" />
            <span className="checkmark submit-label">Do you agree that all documents submitted are valid, if otherwise it is your manipulation</span>
          </label>
          <p className="text-dark container mt-5">Do you agree with the terms and conditions</p>
          <div className="container text-dark mt-2">
            <input type="radio" id="male" name="gender" defaultValue="male" />
            <label className="submit-label">Yes</label>
            <input type="radio" id="female" name="gender" defaultValue="female" />
            <label className="submit-label">No</label>
          </div>
         <div>
        </div>
      </div>;
    default:
      return 'Unknown stepIndex';
  }
}

function Request() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
             <p className="text-dark fs-5">Your request was successfully submitted</p>
             <p className="text-dark">Check <span className="fw-bold">Request Messages</span> to track request progess</p>
            </Typography>
            <Button onClick={handleReset} className="another-request">Submit Another Request</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        )}
       </div>
     </div>
    </div>
  );
}

export default Request;
