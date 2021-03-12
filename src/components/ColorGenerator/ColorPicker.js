import React from 'react';
import './ColorGenerator.css';

const colorList = [
    '#000000',  // black
    '#C0C0C0',  // gray
    '#804040',  // brown
    '#B5744D',  // tan
    '#FEDBB8',  // beige
    '#5600AC',  // violet
    '#AC77F9',  // periwinkle
    '#0000ff',  // blue
    '#0080ff',  // sky blue
    '#00f0ff',  // cyan
    '#008000',  // dark green
    '#13B517',  // green
    '#00ff00',  // light green
    '#eedc02',  // gold
    '#ffff00',  // yellow
    '#ff8000',  // orange
    '#ffA851',  // light orange
    '#800000',  // burgundy
    '#ff0000',  // red
    '#ff80C0',  // pink
    '#ff00ff',  // magenta
    '#ffffff'   // white
];


const ColorPicker = ({colors = colorList, onClick}) => {
    const handleClick = chosenColor => {
        onClick(chosenColor);
    }

    return (
        <section className="cgen-color-picker">
            <div>
                {colors.map((color, index) => {
                    return <div key={index} className="cgen-color-btn" style={{backgroundColor: color}} onClick={() => handleClick(color)} />;
                })}
            </div>
        </section>
    );
};

export default ColorPicker;
