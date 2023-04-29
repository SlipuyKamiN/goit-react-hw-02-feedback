import {
  StatsList,
  StatsListItem,
  StatsFeedbackCounter,
} from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({
  // good,
  // neutral,
  // bad,
  feedbackData,
  positiveFeedbackPercentageCounter,
}) => {
  const countTotalFeedback = () => {
    return Object.values(feedbackData).reduce((total, value) => total + value);
  };

  const total = countTotalFeedback();

  feedbackData = Object.entries(feedbackData);

  return total ? (
    <StatsList>
      {/* <StatsListItem>
      good: <StatsFeedbackCounter>{good}</StatsFeedbackCounter>
    </StatsListItem>
    <StatsListItem>
      neutral: <StatsFeedbackCounter>{neutral}</StatsFeedbackCounter>
    </StatsListItem>
    <StatsListItem>
      bad: <StatsFeedbackCounter>{bad}</StatsFeedbackCounter>
    </StatsListItem> */}
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
  ) : (
    <Notification message="No feedback given" />
  );
};

Statistics.propTypes = {
  // good: PropTypes.number.isRequired,
  // neutral: PropTypes.number.isRequired,
  // bad: PropTypes.number.isRequired,
  feedbackData: PropTypes.object.isRequired,
  positiveFeedbackPercentageCounter: PropTypes.func.isRequired,
};
