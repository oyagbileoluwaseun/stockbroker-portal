import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./VerifierRequest.css";

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
  return ['View Request', 'Request Documents', 'Validate Request/Submit'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <div className="container-fluid">
        <p className="text-dark text-center fw-bold fs-5">Active Request/s Are Displayed Below</p>
      </div>;
    case 1:
      return <div className="container-fluid">
        <p className="text-dark text-center fw-bold fs-5">Documents attached with Request</p>
        <div className="col-8 text-left"> 
        </div>        
      </div>;
    case 2:
      return <div className="mb-5">
        <p className="text-dark container mt-3">The request is validated and accepted</p>
        <div className="container text-dark mt-2">
          <input type="radio" id="male" name="gender" defaultValue="male" />
          <label className="submit-label">Yes</label>
          <input type="radio" id="female" name="gender" defaultValue="female" />
          <label className="submit-label">No</label>
        </div>
        <label className="container text-dark mt-3">If No, select the reason for rejection</label>
        <form className="container mt-1">
          <div className="form-group col-8 mb-5">
            <select className="form-control">
            <option>Reason For Rejection</option>
            <option>Documents Incomplete</option>
            <option>Documents Invalid</option>
            <option>Request is already solved</option>
            <option>Incomplete details</option>
            </select>
          </div>
        </form>
       <div>
      </div>
    </div>;
    default:
    return 'Unknown stepIndex';
  }
}

function VerifierRequest() {
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
             <p className="text-dark fs-5">Request successfully validated</p>
             <p className="text-dark">Check <span className="fw-bold">Requests History</span> to view submitted and pending requests</p>
            </Typography>
            <Button onClick={handleReset} className="another-request">Validate Another Request</Button>
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

export default VerifierRequest;
