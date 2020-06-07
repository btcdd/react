import React from 'react';

import styles from './codetree_css/FileList.css';
import file from '../img/file.png';

export default class FileList extends React.Component {
    
    mouseClickEvent(){
        
        this.props['onNotifySaveCodeChange'](this.props.code);
    }

    render(){
        // console.log("FileList Code >>>>", this.props.code);
       return (
        <div className={styles['problem-file']}>
            <ul>
               <li onClick={this.mouseClickEvent.bind(this)} ><img src={file}/>{this.props.fileName}</li>
            </ul>
        </div>
             
       );
    }
 }
 