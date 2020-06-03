import React from 'react';

import styles from './css/Package.css';
import file from './img/file.png';
import package_s from './img/package.png';
import problem from './img/problem.png';


export default class Package extends React.Component {
   render(){
      return (
         <div className={styles['Package']}>
                <li>
                    <img src={package_s}/>prob1
                        <ul className={styles['problem-file']}>
                            <li><img src={file}/>A.java</li>
                            <li><img src={file}/>B.java</li>
                            <li><img src={file}/>Main.java</li>
                        </ul>
                </li>
                <li>
                    <img src={package_s}/>prob2
                        <ul className={styles['problem-file']}>
                            <li><img src={file}/>A.java</li>
                            <li><img src={file}/>B.java</li>
                            <li><img src={file}/>Main.java</li>
                        </ul>
                </li>

         </div>
            
      );
   }
}
