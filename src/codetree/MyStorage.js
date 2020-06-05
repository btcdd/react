import React from 'react';

import styles from '../codetree_css/MyStorage.css';
import MyList from './MyList';
export default class MyStorage extends React.Component {
    render(){
        
       return (
        <div className={styles['MyStorage']}>
                {this.props.saveList&&this.props.saveList.map( (list) => <MyList
                    key = {list.no}
                    saveNo = {list.no}
                    kind = {list.kind}
                    nickName= {list.nickname}
                    title = {list.title}
                    problemNo = {list.problemNo}
                    userEmail = {this.props.userEmail}
                    onNotifySaveNoChange = {this.props.onNotifySaveNoChange}
                />)}
        </div>
             
       );
    }
 }
 