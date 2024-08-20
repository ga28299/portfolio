import React,{useEffect} from 'react'



export const useStars = (numstars: number) => {
  useEffect(() => {
    const createStars = () => {
      const starContainer = document.getElementById('star-container');
      if (starContainer) {
        for (let i = 0; i < numstars; i++) {
          const star = document.createElement('div');
          star.className = `star ${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`;
          star.style.top = `${Math.random() * 100}vh`;
          star.style.left = `${Math.random() * 100}vw`;
          star.style.animationDelay = `${Math.random() * 4}s`;
          star.style.opacity = `${Math.random()}`;
          starContainer.appendChild(star);
        }
      }
    };
    createStars();
  }, []);
}
