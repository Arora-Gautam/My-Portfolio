/*

Skills.js
Gautam Arora
301497001
05 Feb 2025

*/
import React from 'react';
import AndroidStudio from '../../assets/android.png';
import AwsImg from '../../assets/AWS.png';
import AzureImg from '../../assets/Azure.png';
import ConfluenceImg from '../../assets/Confluence.png';
import CPP from '../../assets/cpp.png';
import Eclipse from '../../assets/eclipse.png';
import FastlaneImg from '../../assets/fastlane.png';
import GithubImg from '../../assets/github.png';
import GithubAction from '../../assets/GitHubActions.png';
import HtmlCss from '../../assets/html.png';
import Java from '../../assets/java.png';
import Javascript from '../../assets/javascript.png';
import JenkinsImg from '../../assets/Jenkins.png';
import JiraImg from '../../assets/Jira.png';
import JsonImg from '../../assets/json.png';
import JupyterNotebook from '../../assets/Jupyter.png';
import ObjectiveC from '../../assets/objectivec.png';
import PythonImg from '../../assets/python.png';
import ReactJS from '../../assets/react.png';
import RestApi from '../../assets/rest.png';
import SpringBoot from '../../assets/springboot.png';
import SqlWorkbench from '../../assets/sql.png';
import Swift from '../../assets/swift.png';
import SwiftLintImg from '../../assets/swiftlint.png';
import SwiftUI from '../../assets/swiftui.png';
import TestFlightImg from '../../assets/testflight.png';
import Xcode from '../../assets/Xcode.png';
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>Apart from being a Centennial College Student studying software engineer - AI
                and as a seasoned computer engineer. I have skills in various domain and technologies
                and able to contribute lot to projects. Here are some of the technologies I have worked and experienced with:

            </span>
            <div className='btnContainer'>
            <div className='btnRowHeader'><br/><br/><br/>---------- PROGRAMMING ----------<br/></div>
                <div className='btnRow'>
                    <button className='btn'><img src={Swift} alt='Swift' className='btnImg'/> Swift</button>
                    <button className='btn'><img src={SwiftUI} alt='SwiftUI' className='btnImg'/> SwiftUI</button>
                    <button className='btn'><img src={ObjectiveC} alt='Objective-C' className='btnImg'/> Objective-C</button>
                    <button className='btn'><img src={Java} alt='Java' className='btnImg'/> Java</button>
                    <button className='btn'><img src={ReactJS} alt='React.js' className='btnImg'/> React.js</button>
                    <button className='btn'><img src={Javascript} alt='JavaScript' className='btnImg'/> JavaScript</button>
                </div>
                <div className='btnRow'>
                    <button className='btn'><img src={PythonImg} alt='Python' className='btnImg'/> Python</button>
                    <button className='btn'><img src={SpringBoot} alt='Spring Boot' className='btnImg'/> Spring Boot</button>
                    <button className='btn'><img src={CPP} alt='C/C++' className='btnImg'/> C/C++</button>
                    <button className='btn'><img src={HtmlCss} alt='HTML/CSS' className='btnImg'/> HTML/CSS</button>
                    <button className='btn'><img src={RestApi} alt='REST' className='btnImg'/> REST</button>
                    <button className='btn'><img src={JsonImg} alt='JSON' className='btnImg'/> JSON</button>
                </div>
                <div className='btnRowHeader'>-------------- TOOLS --------------<br/></div>
                <div className='btnRow'>
                    <button className='btn'><img src={Xcode} alt='XCode' className='btnImg'/> XCode</button>
                    <button className='btn'><img src={AndroidStudio} alt='Android Studio' className='btnImg'/> Android Studio</button>
                    <button className='btn'><img src={Eclipse} alt='Eclipse' className='btnImg'/> Eclipse</button>
                    <button className='btn'><img src={JupyterNotebook} alt='Jupyter Notebook' className='btnImg'/> Jupyter Notebook</button>
                    <button className='btn'><img src={SqlWorkbench} alt='SQL Workbench' className='btnImg'/> SQL Workbench</button>
                </div>
                <div className='btnRow'>
                    <button className='btn'><img src={AwsImg} alt='AWS' className='btnImg'/> AWS</button>
                    <button className='btn'><img src={AzureImg} alt='Azure DevOps' className='btnImg'/> Azure DevOps</button>
                    <button className='btn'><img src={JiraImg} alt='JIRA' className='btnImg'/> JIRA</button>
                    <button className='btn'><img src={ConfluenceImg} alt='Confluence' className='btnImg'/> Confluence</button>
                    <button className='btn'><img src={GithubAction} alt='GitHub Actions' className='btnImg'/> GitHub Actions</button>
                </div>
                <div className='btnRow'>
                    <button className='btn'><img src={GithubImg} alt='GitHub' className='btnImg'/> GitHub</button>
                    <button className='btn'><img src={FastlaneImg} alt='FastLane' className='btnImg'/> FastLane</button>
                    <button className='btn'><img src={TestFlightImg} alt='TestFlight' className='btnImg'/> TestFlight</button>
                    <button className='btn'><img src={JenkinsImg} alt='Jenkins' className='btnImg'/> Jenkins</button>
                    <button className='btn'><img src={SwiftLintImg} alt='SwiftLint' className='btnImg'/> SwiftLint</button>
                </div>
            </div>
        </section>
    )
}

export default Skills;