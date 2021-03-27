import React from "react";
import TemplateComponent from "../Components/TemplateComponent";
import { Layout, Menu, Breadcrumb } from 'antd';
import Editor from '../Components/EditorComponent'
import { LeftNavi } from "../Components/LeftNaviComponent";
// import  '../styles/App.css'

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    return (
        <TemplateComponent />
    )
}

export default App;