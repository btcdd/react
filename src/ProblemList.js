import React from 'react';
import styles from './css/ProblemList.css';

import Problem from './Problem';

export default class ProblemList extends React.Component {

    render(){
       return (
            <div className={styles['problem-list']}>
               <div className={styles['problem-title']}>
                  <p className={styles['problem-title-head']}>{this.props.title}</p>
                  <ul>
                     {this.props.lists && this.props.lists.map((list,index) => <Problem
                        key = {list.no}
                        index = {index+1}
                        no = {list.no}
                        examInput = {list.examInput}
                        examOutput = {list.examOutput}
                        contents = {list.contents}
                        subtitle = {list.title}
                     />)}
                  </ul>
               </div>               
            </div>             
       );
    }
 }

 