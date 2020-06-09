import React, { Fragment } from 'react';

import styles from './css/FileList.css';


export default class FileList extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            
        };
    }    
    selectRemoveEvent(){
        this.props.callbackDeleteFile(this.props.index);
        // console.log("this.props.index>>>>>",this.props.index);
    }
    render(){
       return (
        <Fragment>
            <div className={styles['problem-file']}>
                <div >                    
                    <ul onClick={this.selectRemoveEvent.bind(this)}>    
                        {this.props.filelist}
                        <a href='#' className={styles['File--remove']} />    
                    </ul>
                </div>
            </div>
        </Fragment>
       );
    }
 }
