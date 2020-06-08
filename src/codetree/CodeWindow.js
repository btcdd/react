import React from 'react';
import styles from './codetree_css/CodeWindow.css';
import PackageList from './PackageList';
import MyStorage from './MyStorage';
import AceEditor from "react-ace";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import axios from 'axios';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/webpack-resolver"

import cmd from '../img/cmd.png';

const API_URL = 'http://localhost:8088/compiletest/api/codetree';
const API_HEADERS={
   'Content-Type' : 'application/json'
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

//const [open, setOpen] = React.useState(false);
// const handleClickOpen = () => {
//     this.setState({
//         showDialog: true
//      })
// };

// const handleClose = () => {
//     this.setState({
//         showDialog: false
//      })
// };

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
           fontSize : 15,
           showDialog : false       
       }
    }     

    handleClickOpen() {
        this.setState({
            showDialog: true
         })
    };
    
    handleClose() {
        this.setState({
            showDialog: false
         })
    };

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
    onFontSizeChanged(event) {
        this.setState({
            fontSize: event.target.value
        });
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
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen.bind(this)}>
                내 문제
            </Button>
                <Dialog component={'div'}></Dialog>
                <Dialog
                    open={this.state.showDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose.bind(this)}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"문제를 선택해주세요!"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <MyStorage saveList={this.props.saveList} userEmail={this.props.userEmail} onNotifySaveNoChange={this.onNotifySaveNoChange.bind(this)}  onNotifyProblemNoChange={this.onNotifyProblemNoChange.bind(this)} />
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose.bind(this)} color="primary">
                        확인
                    </Button>
                    <Button onClick={this.handleClose.bind(this)} color="primary">
                        취소
                    </Button>
                    </DialogActions>
                </Dialog>
                <button onClick={this.onClickButton.bind(this)}>저장</button>
                <div className={styles['language-selector']}>
                        <select value={this.state.language} onChange={this.onSelectModeChanged.bind(this)}>
                            <option value='java'>Java</option>
                            <option value='javascript'>JavaScript</option>
                            <option value='python'>Python</option>
                            <option value='cpp'>C++</option>
                            <option value="csharp">C#</option>
                            <option value='c'>C</option>
                        </select>
                    </div>
                    <div className={styles['theme-selector']}>
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
                    </div>
                    <div className={styles['font-size']}>
                        <input type='text' value={this.state.fontSize} onChange={this.onFontSizeChanged.bind(this)} />
                    </div>
            </div>
            <div className={styles['code-mirror']}>
                <div className={styles['cover']}>
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
       
                    <AceEditor
                    height="100%"
                    width="100%"
                    mode={ (this.state.language == 'cpp' || this.state.language == 'c') ? 'c_cpp' : this.state.language } 
                    theme={this.state.mode}
                    fontSize={parseInt(this.state.fontSize)}
                    showPrintMargin={false}
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
         </div>            
      );
   }
}