import React, { Fragment } from 'react';

import styles from './css/PackageList.css';

import package_s from './img/package.png';
import FileList from './FileList';

import file from './img/file.png';
import update from 'react-addons-update'


import axios from 'axios';

import queryString from 'query-string';

const API_URL = 'http://localhost:8088/compiletest/api/codingtest';
const API_HEADERS={
   'Content-Type' : 'application/json'
} 
export default class PackageList extends React.Component {
   constructor() {
      super(...arguments);
      this.state = {
         filenameList:[],
         showAddFile : false,
         filename:'',
         index : 0,
         location : location         
      };
      
  }

  onInputKeyPress(event){
      if(event.key=='Enter'){
            let newList = update(this.state.filenameList,{
               $push : [[<li key={this.state.index}><img src={file}/>{event.target.value}.{this.props.language}</li>]]
            });      
         this.setState({
            filenameList : newList,
            showAddFile : false,
            index : this.state.index + 1
         });
         
         const query = queryString.parse(this.state.location.search);

         
         let fileDB={
             
             fileName : `${event.target.value}.${this.props.language}`
         };
         
         axios.post(`${API_URL}/fileInsert/${query.userEmail}/${query.problemNo}/${this.props.packagelists.no}`,{
            headers: API_HEADERS,
            body: JSON.stringify(fileDB)
          })
          .then(resp =>resp.data.data)
          .then(resp => console.log(resp))
          .catch(err => console.error(err));



      }



   }
   mouseClickAddEvent(){
      this.setState({
         showAddFile : !this.state.showAddFile
      }); 
   } 
   handleClick(){
      this.nameInput.focus();
   }
   onInputChange(event){
      this.setState({
         filename: event.target.value  
      });
   }



   callbackDeleteFile(fileIndex,fileName){
      console.log("fileName >>> >>> >>",fileName);

      let removedList = [];
      for(let i=0;i<this.state.filenameList.length;i++){
         if(fileIndex != i) {
            removedList = update(removedList,{
               $push : [this.state.filenameList[i]]
            });
         }
      }
      this.setState({
         filenameList : removedList
      });


      const query = queryString.parse(this.state.location.search);
      let fileDB={
         fileName : fileName
     };      
     console.log("fileDB >>",fileDB);
     console.log("fileDB >>",fileDB.fileName);
     axios.post(`${API_URL}/fileDelete/${query.userEmail}/${query.problemNo}/${this.props.packagelists.no}`,{
      headers: API_HEADERS,
      body: JSON.stringify(fileDB)
    })
    .then(resp =>resp.data.data)
    .then(resp => console.log(resp))
    .catch(err => console.error(err));

   }

   render(){
      // console.log("this.props.packagelists >>>>> ",this.props.packagelists);
      return (
         <Fragment>
            <div className={styles['problem-packageList']}>
                  <li>
                     <img src={package_s}/>문제 {this.props.index}
                        {this.state.filenameList.map( (filelist,index) => <FileList
                        key={index}
                        index={index}
                        filelist={filelist}
                        callbackDeleteFile={this.callbackDeleteFile.bind(this)}
                        />)}
                  </li>
            </div>
                     
                
            <div className={this.state.showAddFile ? styles['open'] : styles['close']}>
               <input  ref={(ref) => {this.nameInput = ref;}} type='text' value={this.state.filename} onClick={this.handleClick.bind(this)} onChange={this.onInputChange.bind(this)} onKeyPress={this.onInputKeyPress.bind(this)}/>                  
            </div>
            <button onClick={this.mouseClickAddEvent.bind(this)}>+</button>   
         </Fragment>
      );
   }
}
