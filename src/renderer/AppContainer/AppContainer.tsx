import React from "react";
import Editor from '../Components/EditorComponent'
type Props = {};

const App: React.FC = () => {
    const style = {
        width: "50%",
        margin: "0 auto",
        marginTop: 150
    };
    return (
        <div>
            <div style={style}>
                <Editor />
            </div>
        </div>
    )
}

export default App;