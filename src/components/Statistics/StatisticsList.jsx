import {
  StatsList,
  StatsListItem,
  StatsFeedbackCounter,
} from './StatisticsList.styled';

export const StatisticList = ({
  feedbackData,
  totalCounter,
  positiveFeedbackPercentageCounter,
}) => {
  feedbackData = Object.entries(feedbackData);

  return (
    <StatsList>
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
  );
};
