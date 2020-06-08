import React, { Fragment } from 'react';

import styles from './css/FileList.css';
import file from './img/file.png';

import File from './File';


export default class FileList extends React.Component {


    mouseClickAddEvent(){
        this.props.listCallbacks.add();
    }     
    mouseClickDeleteEvent(){
        this.props.listCallbacks.delete();
    }

    render(){
   
        
        // console.log("FileList Code >>>>", this.props.code);
       return (
        <Fragment>
            <div className={styles['problem-file']}>
                <ul>
                <li><img src={file}/>Main</li>
                    <File fileList={this.props.fileList}/>
                </ul>
            </div>
                <button onClick={this.mouseClickAddEvent.bind(this)}>+</button>   
                <button onClick={this.mouseClickDeleteEvent.bind(this)}>-</button>   
        </Fragment>
       );
    }
 }
 