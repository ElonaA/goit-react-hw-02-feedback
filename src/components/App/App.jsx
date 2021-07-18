import { Component } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  
  updateCountFeedback = (data) => {
  this.setState((prevState) => {
    return { [data]: prevState[data] + 1 };
  });
  };
  
  
  countTotalFeedback() {
  return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
  const total = this.countTotalFeedback();

  return total ? Math.floor((this.state.good / total) * 100).toFixed(0) : 0;
  }
  
  

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

      return(
        <>
        <Section title="Оставьте отзыв о нашей компании">
          <FeedbackOptions
            options={this.state} onLeaveFeedback={this.updateCountFeedback}
          />
        </Section>

          
          
      <Section title="Наши отзывы ">
          {total === 0 ? (
            <Notification message="Отзывов пока нет..." />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
        </>
        
  );
  }

}

