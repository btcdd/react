import React, { Fragment } from 'react';

import styles from './codetree_css/MyList.css';
import axios from 'axios';




const API_URL = 'http://localhost:8088/compiletest/api/codetree';
const API_HEADERS={
   'Content-Type' : 'application/json'
}

export default class MyList extends React.Component {
    constructor({location}){
        super(...arguments);
        
      }    
    mouseClickEvent(){
        //problemNo를 올리는 위치
        // console.log("this.props.problemNo >>>>>> ",this.props.problemNo);
        // console.log("this.props.title >>>>>> ",this.props.title);
        this.props['onNotifyProblemNoChange'](this.props.problemNo);
        this.props['onNotifyTitleChange'](this.props.title);
        axios.post(`${API_URL}/list/${this.props.userEmail}/${this.props.saveNo}`,{
            headers: API_HEADERS
         })
         .then(resp => resp.data.data)
         .then(resp => this.props['onNotifySaveNoChange'](resp.savePathVoList,resp.codeVoList))
         .catch(err => console.error(err));          
         
    }
    
    render(){
        
        return (
            
            <div className={styles['MyList']} onClick={this.mouseClickEvent.bind(this)}>
                <div className={styles['MyList-top']}>
                    <div className={styles['no-cover']}>
                        <div className={styles['problem-no']}>
                            No.{this.props.problemNo}
                        </div>
                    </div>
                    <div className={styles['problem-title']}>
                        {this.props.title}      
                    </div>
                </div>
                <div className={styles['MyList-bottom']}>
                    <div className={styles['problem-nickName']}>
                        작성자 : {this.props.nickName}
                    </div>
                    <div className={styles['problem-kind']}>
                        문제 종류 : {this.props.kind}
                    </div>     
                </div>                  
            </div>
     
       );


    }
 }
 
