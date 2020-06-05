import React from 'react';

import styles from '../codetree_css/FileList.css';
import file from '../img/file.png';
export default class FileList extends React.Component {
    render(){
        console.log("FileList Code >>>>", this.props.code);
       return (
        <div className={styles['problem-file']}>
            <ul>
               <li><img src={file}/>{this.props.fileName}</li>
            </ul>
        </div>
             
       );
    }
 }
 