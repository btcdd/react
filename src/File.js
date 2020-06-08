import React, { Fragment } from 'react';

import styles from './css/File.css';





export default class File extends React.Component {
    render(){
       return (
        <Fragment>
            <div className={styles['File']}>
                {this.props.fileList}
            </div>
        </Fragment>
       );
    }
 }
 