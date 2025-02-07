
import * as React from 'react';
import Markdown from 'react-markdown';
import Content from './content';
import ImageSlideshow from '../../common/slide-show';

export default () => {
    return (
        <div >
            <Markdown 
                source={Content}
                escapeHtml={false}
                className={'text'}
            />
            <ImageSlideshow url={'https://photos.app.goo.gl/72C491nFxHkP9hdw6'}/>
        </div>
    );
};