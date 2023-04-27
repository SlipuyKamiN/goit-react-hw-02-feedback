import { AppWrapper } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
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
    const { good, neutral, bad } = this.state;

    return (
      <AppWrapper>
        <Section
          title="Please leave your feedback below"
          children={
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          }
        />
        <Section
          title="Statistics"
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              feedbackData={this.state}
              totalCounter={this.countTotalFeedback}
              positiveFeedbackPercentageCounter={
                this.countPositiveFeedbackPercentage
              }
            />
          }
        />
      </AppWrapper>
    );
  }
}
