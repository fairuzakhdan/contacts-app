import React from 'react';
import { createRoot } from 'react-dom/client';


const Heading =  ({content}) => {
    return (
        <h1>{content}</h1>
    )
}

const Result = () => {
    const content = 'Hello World!!s';
    return (
        <Heading content={content}/>
    )
}


const root = createRoot(document.getElementById('root'));
root.render(<Result />)