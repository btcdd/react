import React from 'react';

import styles from './css/PackageList.css';

import package_s from './img/package.png';
import FileList from './FileList';

import file from './img/file.png';
import update from 'react-addons-update'

export default class PackageList extends React.Component {
   constructor() {
      super(...arguments);
      this.state = {
         filenameList:[]
      };
  }

  onInputKeyPress(fileFullName){
   if(event.key=='Enter'){
         let newList = update(this.state.filenameList,{
            $push : [[<li><img src={file}/>{event.target.value}.{this.props.language}</li>]]
            // $push : [[`${event.target.value}.${this.props.language}`]]
         });      
        this.setState({
           filenameList : newList
        });
   }
}


//   callbackAddList(){
//    let newList = update(this.state.list,{
//       $push : [[<li><img src={file}/>{this.props.language}</li>]]
//    });
//    this.setState({
//        list : newList
//    });
//    console.log("this.state.Map  list>>>>>>>",this.state.list&&this.state.list.map((resp)=>console.log(resp)));
   
//    }

   // callbackDeleteList(){
   //    let newList = update(this.state.list,{
   //       $splice : [[this.state.list,1]]
   //    });
   //    this.setState({
   //       list : newList
   //    });
   // }

   render(){
            
      return (
         <div className={styles['problem-packageList']}>
                <li>
                    <img src={package_s}/>Problem01
                    <FileList  
                  //   key={this.state.list.length}
                  //   listCallbacks={{add:this.callbackAddList.bind(this),delete:this.callbackDeleteList.bind(this)}}
                  //   fileList={this.state.list}
                  //   language={this.props.language}
                    onInputKeyPress={this.onInputKeyPress.bind(this)}
                    filenameList={this.state.filenameList}
                    />

                     
                </li>
                  
                
         </div>
            
      );
   }
}
