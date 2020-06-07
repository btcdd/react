import React from 'react';
import styles from './codetree_css/CodeWindow.css';
import PackageList from './PackageList';
import MyStorage from './MyStorage';

import AceEditor from "react-ace";


import axios from 'axios';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/webpack-resolver"

import cmd from '../img/cmd.png';

const API_URL = 'http://localhost:8088/compiletest/api/codetree/list/save';
const API_HEADERS={
   'Content-Type' : 'application/json'
}

export default class CodeWindow extends React.Component {
    constructor(){
       super(...arguments);
       this.state = {
           language : "java",
           mode : "monokai",
           value : "Hello Forest!",
           saveList : null,
           savePath : null,
           savePathCode : null,
           problemNo : null,
           showInfo:false
           
       }
    }     

    onClickButton(){
        // console.log("CodeWindow  this.state.value>>>>>>",this.state.value);
        // console.log("CodeWindow  this.state.language>>>>>>",this.state.language);
        // console.log("CodeWindow  this.props.savePath>>>>>",this.props.savePath);
        // console.log("CodeWindow  this.props.savePathCode>>>>>",this.props.savePathCode);
        
        // console.log("CodeWindow  this.props.userEmail>>>>>>",this.props.userEmail);
        
        // console.log("CodeWindow  this.props.saveList>>>>>>",this.props.saveList); // => problemNo만 가져오면 된다
        // console.log("CodeWindow  this.props.problemNo>>>>>>",this.props.problemNo);
        if(this.props.problemNo ===null){
            alert("저장리스트를 선택하세요");
            return;
        }

        let saveDB={
            code : this.state.value,
            language : this.state.language,
            savePathVoList : this.props.savePath,
            codeVoList : this.props.savePathCode
        }

        axios.post(`${API_URL}/${this.props.userEmail}/${this.props.problemNo}`,{
            headers: API_HEADERS,
            body:JSON.stringify(saveDB)
         })
         .then(resp => resp.data.data)
         .then(resp => console.log(resp))
         .catch(err => console.error(err)); 

    }

    onNotifySaveCodeChange(code){
        this.setState({
            value : code
        })
    }

    onSelectModeChanged(event){
        this.setState({
            language : event.target.value
        });
    }
    onSelectThemeChanged(event){
        this.setState({
            mode : event.target.value
        });
    }

    handToggle(event) {
        this.setState({
           showInfo: !this.state.showInfo
        })
     }
  
     onNotifyProblemNoChange(problemNo){
        this.props['onNotifyProblemNoChange'](problemNo);
     }
  
     onNotifySaveNoChange(savePath,savePathCode){
        this.props['onNotifySaveNoChange'](savePath,savePathCode);
     }

    render(){

    //   console.log("CodeWindow this.state.value>>>>>",this.state.value);

      return (
          
         <div className={styles['code-window']}>
             
             

            <div className={styles['navigator']}>
                <p>navigator</p>
                <button onClick={this.handToggle.bind(this)}>저장 리스트</button>
                <button onClick={this.onClickButton.bind(this)}>저장</button>
            </div>
            <div className={styles['code-mirror']}>
                <div className={styles['file']}>
                    <div className={styles['problem-explorer']}>PROBLEM EXPLORER</div>
                    <hr />
                    <nav>
                        <ul className={styles['problem-name']}>

                            {this.props.savePath && this.props.savePath.map(savePathList => <PackageList
                                key={savePathList.no}
                                path={savePathList.packagePath}
                                savePathCode = {this.props.savePathCode && this.props.savePathCode.filter( savePathCodeList=> savePathCodeList.subProblemNo == savePathList.subProblemNo )}
                                onNotifySaveCodeChange = {this.onNotifySaveCodeChange.bind(this)}
                            />)}                            
                        </ul>
                    </nav>
                </div>
                <div className={styles['code']}>
                    <select value={this.state.language} onChange={this.onSelectModeChanged.bind(this)}>
                        <option value='java'>Java</option>
                        <option value='javascript'>JavaScript</option>
                        <option value='python'>Python</option>
                        <option value='cpp'>C++</option>
                        <option value="csharp">C#</option>
                        <option value='c'>C</option>
                    </select>
                    <select value={this.state.mode} onChange={this.onSelectThemeChanged.bind(this)}>
                        <option value='monokai'>monokai</option>
                        <option value='github'>github</option>
                        <option value='tomorrow'>tomorrow</option>
                        <option value='kuroir'>kuroir</option>
                        <option value='twilight'>twilight</option>
                        <option value='solarized_dark'>solarized_dark</option>
                        <option value='solarized_light'>solarized_light</option>
                        <option value='terminal'>terminal</option>
                    </select>  
                    
                    <AceEditor
                    height="100%"
                    width="100%"
                    mode={ (this.state.language == 'cpp' || this.state.language == 'c') ? 'c_cpp' : this.state.language } 
                    theme={this.state.mode}
                    fontSize={24}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    onChange={newValue => {
                        this.setState({
                            value : newValue
                        });
                    }}
                    value={`${this.state.value}`}
                    setOptions={{
                        enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                            dragEnabled: true,
                            spellcheck: true,
                            wrapBehavioursEnabled: true,
                            hScrollBarAlwaysVisible: true,
                            vScrollBarAlwaysVisible: true
                        }}
                    />                    
                </div>

                <div className={styles['result']}>
                    <div className={styles['result-header']}>
                    <img className={styles['cmd-img']} src={cmd} width="13px"/><p className={styles['cmd-title']}>명령 프롬프트</p>
                    </div>
                    <div className={styles['result-body']}>
                        <p>CodeForest Windows [Version 10.0.18363.836]</p>
                        <br></br>
                        <p>(c) 2020 CodeForest Corporation. All rights reserved.</p>
                        <br></br>
                        <p>> <span>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋzzzzzzㅋㅋ</span></p><p>></p><p className={styles['under-bar']}>_</p>
                    </div>
                </div>
            </div>
            <div className={this.state.showInfo ? styles['open'] : styles['close']}>
                <MyStorage saveList={this.props.saveList} userEmail={this.props.userEmail} onNotifySaveNoChange={this.onNotifySaveNoChange.bind(this)}  onNotifyProblemNoChange={this.onNotifyProblemNoChange.bind(this)} />   
            </div>     
         </div>            
      );
   }
}