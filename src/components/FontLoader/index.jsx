import { useEffect } from 'react';
import WebFont from 'webfontloader';

const FontLoader = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          'Fira Code:300,400,500,600,700',
          'Inconsolata:200,300,400,500,600,700,800,900',
          'Nunito Sans:200,300,400,500,600,700,800,900'
        ]
      }
    });
  }, []);

  return null;
};

export default FontLoader;
