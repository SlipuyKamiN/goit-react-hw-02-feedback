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
  totalCounter,
  positiveFeedbackPercentageCounter,
}) => {
  feedbackData = Object.entries(feedbackData);

  return totalCounter() ? (
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
        Total: <StatsFeedbackCounter>{totalCounter()}</StatsFeedbackCounter>
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
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  feedbackData: PropTypes.object.isRequired,
  totalCounter: PropTypes.func.isRequired,
  positiveFeedbackPercentageCounter: PropTypes.func.isRequired,
};
