import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyles';
import { Container, StatisticsBox } from './App.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const stateData = Object.keys(this.state);

    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={stateData}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <StatisticsBox>
              <Section title="Statistics">
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage}
                />
              </Section>
            </StatisticsBox>
          )}
        </Container>
        <GlobalStyle />
      </>
    );
  }
}
