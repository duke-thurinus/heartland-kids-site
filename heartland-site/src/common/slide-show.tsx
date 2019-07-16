import * as React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';

export interface State {
    url: string;
    images: ReactImageGalleryItem[];
}
export interface Props {
    url: string;
}

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;
const extractPhotos = (content: string): string[] => {
  const links = [];
  let match;
  while (match = regex.exec(content)) {
    links.push(match[1]);
  } 
  return Array.from(links);
};

export default class GoogleImgGallery extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            url: props.url,
            images: [],
        };
    }
  
  async componentDidMount() {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(
      proxyurl + this.state.url,
    ).then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        return res.text();
    });
      
    if (response) {
      const links = extractPhotos(response);
      console.log(links);
      this.setState({
        images: links.map((url: string) => ({
          original: `${url}=w1024`,
          media: 'max-width: 100%;',
        })),
      });
    }
  }  
  
  render() {
    const { images } = this.state;
    return images ? 
        (
          <ImageGallery 
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            items={images} 
          /> 
        )
    : null;
  }
}