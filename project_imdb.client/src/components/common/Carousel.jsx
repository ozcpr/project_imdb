import React, { useRef, useState } from 'react';

const Carousel = ({ children }) => {
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (direction) => {
        const container = containerRef.current;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        const newPosition =
            direction === 'next'
                ? Math.min(scrollPosition + 300, scrollWidth)
                : Math.max(scrollPosition - 300, 0);

        container.scrollTo({ left: newPosition, behavior: 'smooth' });
        setScrollPosition(newPosition);
    };

    return (
        <div className="carousel-container" ref={containerRef}>
            <div className="carousel-content">{children}</div>
            <button onClick={() => handleScroll('prev')}>Previous</button>
            <button onClick={() => handleScroll('next')}>Next</button>
        </div>
    );
};

export default Carousel;
