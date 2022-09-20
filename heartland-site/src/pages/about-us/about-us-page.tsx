
import * as React from 'react';
import Markdown from 'react-markdown';
import Content from './content';
import 'index.css';

export default () => {
    return (
        <div >
            <Markdown 
                source={Content}
                escapeHtml={false}
                className={'text'}
            />
        </div>
    );
};