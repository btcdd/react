import React, { Fragment } from 'react';

import styles from './css/File.css';





export default class File extends React.Component {
    
    render(){
       return (
        <Fragment>
            <li className={styles['File']}>
                {this.props.filenameList}
            </li>
        </Fragment>
       );
    }
 }
 