import PropTypes from "prop-types";
import { Inner, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const keys = Object.keys(options);
    
    return (
     <Inner>
      {keys.map((key) => (
        <Button
          key={key}
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {key.slice(0, 1).toLocaleUpperCase() + key.slice(1)}
        </Button>
      ))}
    </Inner>   
    );
}


FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,

  onLeaveFeedback: PropTypes.func.isRequired,
};