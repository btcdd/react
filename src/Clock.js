import React from 'react';
import styles from './css/Clock.css';

import Countdown from './Countdown';


export default class Clock extends React.Component {
   render(){
      const startTime_A = this.props.startTime;
      const Year =  startTime_A && startTime_A.substr(0,4);
      const Month = startTime_A && startTime_A.substr(5,2);
      const Day = startTime_A && startTime_A.substr(8,2);
      const Hour = startTime_A && startTime_A.substr(11,2);
      const Minute = startTime_A && startTime_A.substr(14,2);
      const Seconds = startTime_A && startTime_A.substr(17,2);

      return (
         <div className={styles.Clock}>
            <Countdown date={this.props.endTime}/>    
            <div className={styles['start-time']}>
               <p>[시작 시간] <strong>{Hour} : {Minute}</strong></p>
            </div>    
         </div>
      );
   }


 }