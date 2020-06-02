import React from 'react';
import styles from './css/CodeWindow.css';
import Package from './Package';
// import CodeMirror from './CodeMirror';

// import "../codemirror/lib/codemirror.js";
// import "../codemirror/lib/codemirror.css";
// import "../codemirror/theme/material.css"
// import "../codemirror/mode/xml/xml.js";

// import {UnControlled as CodeMirror} from 'react-codemirror2'

import ReactAce from 'react-ace-editor';

export default class CodeWindow extends React.Component {
    constructor(){
        super(...arguments);
        this.onChange = this.onChange.bind(this);
    }    
    onChange(newValue, e) {
       console.log(newValue, e);
    
       const editor = this.ace.editor; // The editor object is from Ace's API
       console.log(editor.getValue()); // Outputs the value of the editor
    }

   render(){
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
                            <Package />
                        </ul>
                    </nav>
                </div>
                <div className={styles['code']}>
                    <p>코드 위치      </p>
                    <ReactAce
                        mode="javascript"
                        theme="eclipse"
                        setReadOnly= {false}
                        onChange={this.onChange}
                        style={{ height: '400px' }}
                        ref={instance => { this.ace = instance; }} // Let's put things into scope
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