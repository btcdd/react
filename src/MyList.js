import React, { Fragment } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import styles from './css/MyList.css';
import axios from 'axios';

import CodeTreeContainer from './CodeTreeContainer';


const API_URL = 'http://localhost:8088/compiletest/api/codetree/list';
const API_HEADERS={
   'Content-Type' : 'application/json'
}

export default class MyList extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            click : false,
            savePath : null,
            savePathCode : null
        }
        
      }    
    mouseClickEvent(event){

        axios.post(`${API_URL}/${this.props.userEmail}/${this.props.saveNo}`,{
            headers: API_HEADERS
         })
         .then(resp => resp.data.data)
        //  .then(resp => console.log(resp))
         .then(resp => this.setState({
            savePath : resp.savePathVoList,
            savePathCode : resp.codeVoList,
            click : true
         }))
         .catch(err => console.error(err));                

         
         
         
    }
    
    
    
    render(){
        console.log(this.state.click);
        if(this.state.click){
            return(
                <div>
                    <Router>
                        <Route render={props => (<CodeTreeContainer {...props}/>  )  }/>
                    </Router>
                </div>
            );
          
        }else{

            return (
            
                <div className={styles['MyList']}>
                    <p>saveNo : {this.props.saveNo}</p>
                    <div className={styles['problem-no']}  onClick={this.mouseClickEvent.bind(this)} >
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
 }
 