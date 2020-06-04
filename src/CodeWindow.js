import React from 'react';
import styles from './css/CodeWindow.css';
import Package from './Package';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/webpack-resolver"

export default class CodeWindow extends React.Component {
    constructor(){
        super(...arguments);
       
        
    }    


   render(){
      return (
         <div className={styles.CodeWindow}>
            <div className={styles['navigator']}>
                <p>navigator</p>
            </div>
            <div className={styles['code-mirror']}>
                <div className={styles['cover']}>
                    <div className={styles['file']}>
                        <div className={styles['problem-explorer']}>PROBLEM EXPLORER</div>
                        <hr />
                        <nav>
                            <ul className={styles['problem-name']}>
                                <Package />
                            </ul>
                        </nav>
                    </div>
                    <div className={styles['code']}>
                        <AceEditor
                        height="100%"
                        width="auto"
                        mode="python"
                        theme="monokai"
                        onLoad={this.onLoad}
                        onChange={this.onChange}
                        fontSize={24}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={``}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                            }}/>                    
                    </div>
                </div>
                <div className={styles['result']}>
                    <p>코드 결과창</p>



                </div>

            </div>
         </div>            
      );
   }
}