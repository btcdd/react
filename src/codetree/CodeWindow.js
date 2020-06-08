import React from 'react';
import styles from './codetree_css/CodeWindow.css';
import PackageList from './PackageList';

import AceEditor from "react-ace";


import axios from 'axios';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/webpack-resolver"


const API_URL = 'http://localhost:8088/compiletest/api/codetree';
const API_HEADERS={
   'Content-Type' : 'application/json'
}

export default class CodeWindow extends React.Component {
    constructor(){
       super(...arguments);
       this.state = {
           language : "java",
           mode : "monokai",
           value : "Hello Forest!"
           
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

        axios.post(`${API_URL}/list/save/${this.props.userEmail}/${this.props.problemNo}`,{
            headers: API_HEADERS,
            body:JSON.stringify(saveDB)
         })
         .then(resp => resp.data.data)
         .then(resp => console.log(resp)) //저장 후 처리 필요하다
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

    render(){

    //   console.log("CodeWindow this.state.value>>>>>",this.state.value);

      return (
          
         <div className={styles['code-window']}>


            <div className={styles['navigator']}>
                <p>navigator</p>
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
                        enableBasicAutocompletion : true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2
                        }}
                    />                    
                </div>
                <button onClick={this.onClickButton.bind(this)}>저장</button>

                <div className={styles['result']}>
                    <p>코드 결과창</p>


                </div>

            </div>
         </div>            
      );
   }
}