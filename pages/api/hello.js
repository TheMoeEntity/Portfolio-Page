// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useState, useEffect } from 'react';
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


export function useScreenWidth() {

    const [windowWidth, setWindowWidth] = useState(null);

    const isWindow = typeof window !== 'undefined';

    const getWidth = () => isWindow ? window.innerWidth : windowWidth;

    const resize = () => setWindowWidth(getWidth());

    useEffect(() => {
        if (isWindow) {
            setWindowWidth(getWidth());
      
            window.addEventListener('resize', resize);
       
            return () => window.removeEventListener('resize', resize);
        }
    //eslint-disable-next-line
    }, [isWindow]);

    return windowWidth;
}
