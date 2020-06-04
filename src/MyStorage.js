import React from 'react';

import styles from './css/MyStorage.css';
import MyList from './MyList';
export default class MyStorage extends React.Component {
    render(){
        
       return (
        <div className={styles['MyStorage']}>
            <p>저장 리스트</p>
            {this.props.saveList&&this.props.saveList.map( (list) => <MyList
                key = {list.no}
            />)}
        </div>
             
       );
    }
 }
 