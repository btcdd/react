import React from 'react';

import styles from './css/PackageList.css';

import package_s from './img/package.png';
import FileList from './FileList';

export default class PackageList extends React.Component {
    
   render(){
      const path = this.props.path.split("/");
      console.log("PackageList    savePathCode>>>",this.props.savePathCode);
      return (
         <div className={styles['problem-packageList']}>
                <li>
                    <img src={package_s}/>{path[4]}   
                    {this.props.savePathCode.map( savePathCodeList => <FileList 
                        key = {savePathCodeList.no}
                        fileName = {savePathCodeList.fileName}
                        language = {savePathCodeList.language}
                        code = {savePathCodeList.code}
                    /> )}
                     
                </li>

         </div>
            
      );
   }
}
