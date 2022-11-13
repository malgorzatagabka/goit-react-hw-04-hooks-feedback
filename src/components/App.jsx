import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


import style from './App.module.css';


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


 countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
 }
  
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
}

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
 
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className={style.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

// export const App = () => {

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
