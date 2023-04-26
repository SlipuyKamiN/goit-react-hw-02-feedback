import { AppWrapper } from './App.styled';
import { AppTitle, AppSubTitle, NoFeedback } from './AppTitles.styled';
import { FeedbackButtonsList } from 'components/FeedbackButtons/FeedbackButtonsList';
import { StatisticList } from 'components/Statistics/StatisticsList';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = event => {
    const feedbackToUpdate = event.target.innerText.toLowerCase();

    this.setState(state => {
      return {
        [feedbackToUpdate]: state[feedbackToUpdate] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value);
  };
  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce(
      (total, value) => total + value
    );

    return ((this.state.good * 100) / total || 0).toFixed(0);
  };

  render() {
    return (
      <AppWrapper>
        <AppTitle>Please leave your feedback below</AppTitle>
        <FeedbackButtonsList
          feedbackTypes={this.state}
          updateState={this.updateState}
        />
        <AppSubTitle>Statistics</AppSubTitle>
        {this.countTotalFeedback() ? (
          <StatisticList
            feedbackData={this.state}
            totalCounter={this.countTotalFeedback}
            positiveFeedbackPercentageCounter={
              this.countPositiveFeedbackPercentage
            }
          />
        ) : (
          <NoFeedback>No feedback given</NoFeedback>
        )}
      </AppWrapper>
    );
  }
}
