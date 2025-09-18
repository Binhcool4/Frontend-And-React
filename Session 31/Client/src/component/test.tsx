import React from "react";
import MDEditor from '@uiw/react-md-editor';

export default function Test() {
    const [value, setValue] = React.useState();
    return (
        <div className="container">
            <MDEditor
                value={value}
                onChange={setValue}
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    );
}