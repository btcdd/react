import React from 'react';
import styles from './css/CodeWindow.css';
import PackageList from './PackageList';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/webpack-resolver"

import cmd from './img/cmd.png';

export default class CodeWindow extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            language: "java",
            mode: "monokai",
            value: null,
            jValue: null,
            jsValue: null,
            cValue: null,
            cppValue: null,
            csValue: null,
            pyValue: null,
            fontSize: 15
        };
    }
    onSelectModeChanged(event) {
        this.setState({
            language: event.target.value
        });
    }
    onSelectThemeChanged(event) {
        this.setState({
            mode: event.target.value
        });
    }
    onFontSizeChanged(event) {
        this.setState({
            fontSize: event.target.value
        });
    }

    onValueChanged(newValue) {
        if (this.state.language == "java") {
            this.setState({
                jValue: newValue,
                value: newValue
            });
        } else if (this.state.language == "javascript") {
            this.setState({
                jsValue: newValue,
                value: newValue
            });
        } else if (this.state.language == "c") {
            this.setState({
                cValue: newValue,
                value: newValue
            });
        } else if (this.state.language == "cpp") {
            this.setState({
                cppValue: newValue,
                value: newValue
            });
        } else if (this.state.language == "python") {
            this.setState({
                pyValue: newValue,
                value: newValue
            });
        } else if (this.state.language == "csharp") {
            this.setState({
                csValue: newValue,
                value: newValue
            });
        }
    }

    render() {
        const java_Code = "public class Test{\n\t\tpublic static void main(String[] args){\n\t\t\tSystem.out.println('Hello CodeForest!');\n\t\t}\n}";
        const javaScript_Code = "var str = 'Hello CodeForest';\nconsole.log(str);";
        const C_Code = "#include <stdio.h>\n\nint main() {\n\n\tprintf('Hello CodeForest!');\n\n\treturn 0;\n}";
        const CPlus_Code = "#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n\tcout << 'Hello CodeForest!' << endl;\n\n\treturn 0;\n}";
        const CSharp_Code = "using System;\n\nclass HelloWorld {\n\n\tstatic void Main() {\n\n\t\tConsole.WriteLine('Hello CodeForest');\n\t}\n}";
        const python_Code = "print('Hello CodeForest!')";

        if (this.state.language == "java") {
            if (this.state.jValue == null) {
                this.state.jValue = java_Code;
                this.state.value = this.state.jValue;

            }
            else {
                this.state.value = this.state.jValue;
            }
        } else if (this.state.language == "javascript") {
            if (this.state.jsValue == null) {
                this.state.jsValue = javaScript_Code;
                this.state.value = this.state.jsValue;

            }
            else {
                this.state.value = this.state.jsValue;
            }
        } else if (this.state.language == "c") {
            if (this.state.cValue == null) {
                this.state.cValue = C_Code;
                this.state.value = this.state.cValue;

            }
            else {
                this.state.value = this.state.cValue;
            }
        } else if (this.state.language == "cpp") {
            if (this.state.cppValue == null) {
                this.state.cppValue = CPlus_Code;
                this.state.value = this.state.cppValue;

            }
            else {
                this.state.value = this.state.cppValue;
            }
        } else if (this.state.language == "python") {
            if (this.state.pyValue == null) {
                this.state.pyValue = python_Code;
                this.state.value = this.state.pyValue;

            }
            else {
                this.state.value = this.state.pyValue;
            }
        } else if (this.state.language == "csharp") {
            if (this.state.csValue == null) {
                this.state.csValue = CSharp_Code;
                this.state.value = this.state.csValue;

            }
            else {
                this.state.value = this.state.csValue;
            }
        }
        // console.log("this.props.savePath>>>>>",this.props.savePath);
        // console.log("this.props.savePathCode>>>>>",this.props.savePathCode);
        return (
            <div className={styles.CodeWindow}>
                <div className={styles['navigator']}>
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
                                        savePathCode={this.props.savePathCode && this.props.savePathCode.filter(savePathCodeList => savePathCodeList.subProblemNo == savePathList.subProblemNo)}
                                    />)}

                                </ul>
                            </nav>
                        </div>
                    

                            <AceEditor                                
                                height="100%"
                                width="100%"
                                mode={(this.state.language == 'cpp' || this.state.language == 'c') ? 'c_cpp' : this.state.language}
                                theme={this.state.mode}
                                fontSize={parseInt(this.state.fontSize)}
                                showPrintMargin={false}
                                showGutter={true}
                                highlightActiveLine={true}
                                value={this.state.value}
                                onChange={this.onValueChanged.bind(this)}
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