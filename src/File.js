import React, { Fragment } from 'react';

import styles from './css/File.css';





export default class File extends React.Component {
    constructor(){
        super(...arguments);

    }
    onDeleteEvent(){
        
        // this.props.callbackDeleteFile();
    }
    render(){
        console.log("this.props.finenameList>>>>>>>",this.props.file);



       return (
        <Fragment>
            
            <li className={styles['File']} onClick={this.onDeleteEvent.bind(this)}>
                {this.props.file}
            </li>

        </Fragment>
       );
    }
 }
 