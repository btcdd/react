import React, { Fragment } from 'react';

import styles from './css/FileList.css';
import file from './img/file.png';

import File from './File';


export default class FileList extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            filename:'',
            showAddFile : false         
        };
    }
    onInputChange(event){
        this.setState({
            filename: event.target.value,
            
        });
    }
    onInputKeyPress(event){
        if(event.key=='Enter'){
            this.props.onInputKeyPress(event.target.value);
            this.setState({
                showAddFile : false
            }); 
        }

    }
    mouseClickAddEvent(){
        this.setState({
            showAddFile : !this.state.showAddFile
        }); 

        // this.props.listCallbacks.add();
    }     
    // mouseClickDeleteEvent(){
    //     this.props.listCallbacks.delete();
    // }

    render(){
        console.log("FileList   this.props.filenameList>>>>>",this.props.filenameList);
       return (
        <Fragment>
            <div className={styles['problem-file']}>
                <ul>
                <div className={this.state.showAddFile ? styles['open'] : styles['close']}>
                <input type='text' value={this.state.filename}  onChange={this.onInputChange.bind(this)} onKeyPress={this.onInputKeyPress.bind(this)}/>
                </div>
                <File filenameList={this.props.filenameList} />
                </ul>
            </div>
                
                <button onClick={this.mouseClickAddEvent.bind(this)}>+</button>   
                {/* <button onClick={this.mouseClickDeleteEvent.bind(this)}>-</button>    */}
        </Fragment>
       );
    }
 }
 