import React from 'react';
import styles from './css/CodeBlock.css';
import Markdown from "react-syntax-highlighter";


export default class CodeBlock extends React.Component {
   render(){
       
      return (
         <div className={styles['CodeBlock']}>
            <Markdown>
                {this.props}
                <p>
                    asdfasdfasdfjkasjkfdasdfasfd
                    asjdkfjklasfdaaasdfsadfdsafklasfasdasdasdfasdfasdfasdf
                </p>
            </Markdown>
         </div>
            
      );
   }
}
