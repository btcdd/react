import React from 'react';
import styles from './css/Problem.css';


export default class Problem extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
           showInfo: false
        }
     }
  
     handToggle(event) {
        this.setState({
           showInfo: !this.state.showInfo
        })
     }

    render(){
       return (
            <div className={styles['problem']}>
               <li>
                    <div className={styles['sub-problem-title']} onClick={this.handToggle.bind(this)}>
                        <p className={styles['problem-index']}>문제 {this.props.index}</p>
                        <p className={styles['subtitle']}>{this.props.subtitle}</p>
                    </div>
                    <div className={this.state.showInfo ? styles['open'] : styles['close']}>
                        <div className={styles['contents']}>
                            <p className={styles['problem-contents-title']}>문제 내용</p>
                            <br/>
                            <p className={styles['problem-contents']}>{this.props.contents}</p>
                        </div>
                        <hr className={styles['division']} />
                        <div className={styles['examInput']}>
                            <p className={styles['problem-examInput-title']}>입력 예제</p>
                            <br/>
                            <p className={styles['problem-examInput']}>{this.props.examInput}</p>
                        </div>
                        <hr className={styles['division']} />
                        <div className={styles['examOutput']}>
                            <p className={styles['problem-examOutput-title']}>출력 예제</p>
                            <br/>
                            <p className={styles['problem-examOutput']}>{this.props.examOutput}</p>
                        </div>                            
                    </div>
               </li>               
            </div>
             
       );
    }
 }

 