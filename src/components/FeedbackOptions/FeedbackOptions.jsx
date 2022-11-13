import PropTypes from 'prop-types';
import style from './Feedback.module.css'
    
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
 
      <div>
        {options.map(option => {
          return (
              <button
              className={style.btn}
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              >
                {option}
            </button>
          );
        })}
      </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}