import React from 'react';
import styles from './css/Countdown.css';

export default class Countdown extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            years : 0,
            days : 0,
            hours : 0,
            min : 0,
            sec : 0
        }
    }
   render(){
      return (
            <div className={styles.Countdown}>
                <p>[남은 시간]&nbsp;  
                {/* <strong>{this.addLeadingZeros(this.state.years)}</strong>
                <span>Years</span> */}

                {/* <strong>{this.addLeadingZeros(this.state.days)}</strong>
                <span>{this.state.days === 1 ? 'Day' : 'Days'}</span> */}

                <strong>{this.addLeadingZeros(this.state.hours)}
                <span> : </span>

                {this.addLeadingZeros(this.state.min)}
                <span> : </span>

                {this.addLeadingZeros(this.state.sec)}</strong>
                </p>                
            </div>
      );
   }

   componentDidMount(){ 
       this.interval = setInterval( () => {
           const date = this.calculateCountdown(this.props.date);
           date ? this.setState(date) : this.stop();
       },1000)
   }
   componentWillUnmount(){
       this.stop();
   }
   stop(){
       alert('시험이 종료되었습니다.');
       window.close();
       clearInterval(this.interval);
   }

   calculateCountdown(endDate){
       let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
       if(diff <= 0) return false;
       const timeLeft = {
            years : 0,
            days : 0,
            hours : 0,
            min : 0,
            sec : 0
       };

    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
        timeLeft.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.years * 365.25 * 86400;
      }
      if (diff >= 86400) { // 24 * 60 * 60
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
      }
      if (diff >= 3600) { // 60 * 60
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
      }
      if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
      }
      timeLeft.sec = diff;
  
      return timeLeft;

   }
   
   
   addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }


}
