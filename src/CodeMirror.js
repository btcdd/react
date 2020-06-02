import React from 'react';
import styles from './css/CodeMirror.css';

import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';


const input = '<h1> Hello World</h1>\n\n# [This](http://www.naver.com) is a paragraph';

export default class CodeMirror extends React.Component {
   render(){
      return (
         <div className={styles['CodeMirror']}>
             <ReactMarkdown source={input}
             renderers = {{code : CodeBlock}}/>
         </div>
            
      );
   }
}
