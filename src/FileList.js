import React, { Fragment } from 'react';

import styles from './css/FileList.css';

// import AceEditor from './AceEditor';
export default class FileList extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
        };
    }    
    selectFile(){
        
        // console.log("parent.location.href>>",parent.location.href);
        
    }
    selectRemoveEvent(){
        const fileName = this.props.filelist[0].props.children[1]+this.props.filelist[0].props.children[2]+this.props.filelist[0].props.children[3];
        this.props.callbackDeleteFile(this.props.index,fileName);
    }
    render(){
       return (
        <Fragment>
            <div className={styles['problem-file']}>
                <div >                    
                    <ul onClick={this.selectFile.bind(this)}>    
                        {this.props.filelist}
                    </ul>
                    <a href='#' className={styles['File--remove']} onClick={this.selectRemoveEvent.bind(this)}/>    
                </div>                
            </div>
            
        </Fragment>
       );
    }
 }
