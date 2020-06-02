import React from 'react';
import styles from './css/CodeWindow.css';
import Package from './Package';
import CodeMirror from './CodeMirror';

export default class CodeWindow extends React.Component {
   render(){
      return (
         <div className={styles['code-window']}>
            <div className={styles['navigator']}>
                <p>navigator</p>
            </div>
            <div className={styles['code-mirror']}>
                <div className={styles['file']}>
                    <div className={styles['problem-explorer']}>PROBLEM EXPLORER</div>
                    <hr />
                    <nav>
                        <ul className={styles['problem-name']}>
                            <Package />
                        </ul>
                    </nav>
                </div>
                <div className={styles['code']}>
                    <p>코드 위치      </p>
                    <CodeMirror /> 


                </div>
                <div className={styles['result']}>
                    <p>코드 결과창</p>



                </div>

            </div>
         </div>            
      );
   }
}