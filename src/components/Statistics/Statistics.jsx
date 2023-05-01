import {
  StatsList,
  StatsListItem,
  StatsFeedbackCounter,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  feedbackData,
  total,
  positiveFeedbackPercentageCounter,
}) => {
  return (
    <StatsList>
      {feedbackData.map(item => (
        <StatsListItem key={item[0]}>
          {item[0]}: <StatsFeedbackCounter>{item[1]}</StatsFeedbackCounter>
        </StatsListItem>
      ))}
      <StatsListItem>
        Total: <StatsFeedbackCounter>{total}</StatsFeedbackCounter>
      </StatsListItem>
      <StatsListItem>
        Positive feedback:{' '}
        <StatsFeedbackCounter>
          {positiveFeedbackPercentageCounter()}%
        </StatsFeedbackCounter>
      </StatsListItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  feedbackData: PropTypes.array.isRequired,
  positiveFeedbackPercentageCounter: PropTypes.func.isRequired,
};
