import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyles';
import { Container, StatisticsBox } from './App.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState('0');
  const [neutral, setNeutral] = useState('0');
  const [bad, setBad] = useState('0');

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = state;
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    // const { good } = state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  // const { good, neutral, bad } = state;
  const positivePercentage = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();
  // const stateData = Object.keys({ good: 0, neutral: 0, bad: 0 });

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
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
};
