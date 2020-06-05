import React from 'react';
import styles from '../codetree_css/CodeWindow.css';
import PackageList from './PackageList';

import AceEditor from "react-ace";



import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/webpack-resolver"


export default class CodeWindow extends React.Component {
    constructor(){
       super(...arguments);
       this.state = {
           language : "java",
           mode : "monokai",
           value : null
       }
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
        const java_Code = "public class Test{\n\t\tpublic static void main(String[] args){\n\t\t\tSystem.out.println('Hello CodeForest!');\n\t\t}\n}";        
        const javaScript_Code = "var str = 'Hello CodeForest';\nconsole.log(str);";
        const C_Code = "#include <stdio.h>\n\nint main() {\n\n\tprintf('Hello CodeForest!');\n\n\treturn 0;\n}";
        const CPlus_Code = "#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n\tcout << 'Hello CodeForest!' << endl;\n\n\treturn 0;\n}";
        const CSharp_Code ="using System;\n\nclass HelloWorld {\n\n\tstatic void Main() {\n\n\t\tConsole.WriteLine('Hello CodeForest');\n\t}\n}";
        const python_Code ="print('Hello CodeForest!')";
    
        if(this.state.language == "java"){
            this.state.value = java_Code;
        }else if(this.state.language == "javascript"){
            this.state.value = javaScript_Code;
        }else if(this.state.language == "c" ){
            this.state.value = C_Code;
        }else if(this.state.language == "cpp"){
            this.state.value = CPlus_Code;
        }else if(this.state.language == "python"){
            this.state.value = python_Code;
        }else if(this.state.language == "csharp"){
            this.state.value = CSharp_Code;
        }
        console.log("CodeWindow this.props.savePath>>>>>",this.props.savePath);
        console.log("CodeWindow this.props.savePathCode>>>>>",this.props.savePathCode);
        

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
                <div className={styles['result']}>
                    <p>코드 결과창</p>



                </div>

            </div>
         </div>            
      );
   }
}