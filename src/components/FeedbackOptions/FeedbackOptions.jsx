import { ButtonsList, ButtonsListItem, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  options = Object.keys(options);

  return (
    <ButtonsList>
      {options.map(option => (
        <ButtonsListItem key={option}>
          <Button onClick={onLeaveFeedback}>{option}</Button>
        </ButtonsListItem>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
