import React from 'react';
import styles from './css/Problem.css';


export default class Problem extends React.Component {
    render(){
       return (
            <div className={styles['problem']}>
               <li>
                    <div className={styles['sub-problem-title']}>
                        <p className={styles['problem-index']}>문제 {this.props.index}</p>
                        <p>{this.props.subtitle}</p>
                    </div>
                    <div className={styles['open']}>
                        <div className={styles['contents']}>
                            <p className={styles['problem-contents-title']}>문제 내용</p>
                            <p className={styles['problem-contents']}>{this.props.contents}</p>
                        </div>
                        <hr className={styles['division']} />
                        <div className={styles['examInput']}>
                            <p className={styles['problem-examInput-title']}>입력 예제</p>
                            <p className={styles['problem-examInput']}>{this.props.examInput}</p>
                        </div>
                        <hr className={styles['division']} />
                        <div className={styles['examOutput']}>
                            <p className={styles['problem-examOutput-title']}>출력 예제</p>
                            <p className={styles['problem-examOutput']}>{this.props.examOutput}</p>
                        </div>                            
                    </div>
               </li>               
            </div>
             
       );
    }
 }

 