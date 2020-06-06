import React, { Fragment } from 'react';

import styles from './codetree_css/MyList.css';
import axios from 'axios';




const API_URL = 'http://localhost:8088/compiletest/api/codetree/list';
const API_HEADERS={
   'Content-Type' : 'application/json'
}

export default class MyList extends React.Component {
    constructor({location}){
        super(...arguments);
        
      }    
    mouseClickEvent(){
        //problemNo를 올리는 위치
        this.props['onNotifyProblemNoChange'](this.props.problemNo);

        axios.post(`${API_URL}/${this.props.userEmail}/${this.props.saveNo}`,{
            headers: API_HEADERS
         })
         .then(resp => resp.data.data)
         .then(resp => this.props['onNotifySaveNoChange'](resp.savePathVoList,resp.codeVoList))
         .catch(err => console.error(err));                
         
    }
    
    render(){
        return (
            
            <div className={styles['MyList']} onClick={this.mouseClickEvent.bind(this)}>
                <p>saveNo : {this.props.saveNo}</p>
                <div className={styles['problem-no']}   >
                    문제 번호 : {this.props.problemNo}
                </div>
                <div className={styles['problem-title']}>
                    타이틀 : {this.props.title}      
                </div>
                <div className={styles['problem-nickName']}>
                    닉네임 : {this.props.nickName}
                </div>
                <div className={styles['problem-kind']}>
                    문제 종류 : {this.props.kind}
                </div>                
                
                
            </div>
     
       );


    }
 }
 
