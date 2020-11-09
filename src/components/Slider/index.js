import React from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`
    position: relative;
    border-radius: 3px;
    background: #ddd;
    height: 15px;
`;

const StyledThumb = styled.div`
    width: 10px;
    height: 25px;
    border-radius: 3px;
    position: relative;
    top: -5px;
    opacity: 0.5;
    background: #000;
    cursor: pointer;
`;

const getPercentage = (current, max) => (100 * current) / max;
const getLeft = percentage => `calc(${percentage}% - 5px)`;

const Slider = () => {
    const sliderRef = React.useRef();
    const thumbRef = React.useRef();
    const diff = React.useRef();

    const handleMouseMove = event => {
        let newX = event.clientX - diff.current - sliderRef.current.getBoundingClientRect().left;
        const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;

        const start = 0;

        newX = newX < start ? 0 : newX > end ? end : newX;

        const newPercentage = getPercentage(newX, end);
        thumbRef.current.style.left = getLeft(newPercentage);
    }

    const handleMouseDown = event => {
        diff.current = event.clientX - thumbRef.current.getBoundingClientRect().left;
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
    
    const handleMouseUp = () => {
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
    }

    return (
        <div>
            <StyledSlider ref={sliderRef}>
                <StyledThumb ref={thumbRef} onMouseDown={handleMouseDown}/>
            </StyledSlider>
        </div>
    )
}

export default Slider;