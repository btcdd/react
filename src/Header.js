import React from 'react';
import Clock from './Clock';
import styles from './css/Header.css';

export default class Header extends React.Component {
    render(){
       return (
          <div className={styles['header']}>
                <div className={styles['logo']}>
                    Coding Test
                </div>
                <div className={styles['menu']}>
                    <div className={styles['dropdown']}>
                        <button className={styles['dropbtn']}>FILE</button>
                        <div className={styles['dropdown-content']}>
                            <a href="#">File</a>
                        </div>
                    </div>
                    <div className={styles['dropdown']}>
                        <button className={styles['dropbtn']}>EDIT</button>
                        <div className={styles['dropdown-content']}>
                            <a href="#">File</a>
                        </div>
                    </div>
                    <div className={styles['dropdown']}>
                        <button className={styles['dropbtn']}>RUN</button>
                        <div className={styles['dropdown-content']}>
                            <a href="#">File</a>
                        </div>
                    </div>
                    <div className={styles['dropdown']}>
                        <button className={styles['dropbtn']}>HELP</button>
                        <div className={styles['dropdown-content']}>
                            <a href="#">File</a>
                        </div>
                    </div>                                   
                </div>
                <Clock startTime={this.props.startTime} endTime={this.props.endTime}/>
          </div>
             
       );
    }
 }