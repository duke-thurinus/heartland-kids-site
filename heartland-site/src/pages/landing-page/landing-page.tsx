import * as React from 'react';
import Markdown from 'react-markdown';
import Content from './content';

export default () => {
    return (
        <div >
            <Markdown
                source={Content}
                escapeHtml={false}
            />
        </div>
    );
};
