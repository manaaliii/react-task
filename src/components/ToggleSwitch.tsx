import React, { useState } from 'react';

const ToggleSwitch:React.FC = () => {
    type styleTypeButton = {
        backgroundColor: string,
        color: string
    }
    // initial style of button
    const initialButtonStyle:styleTypeButton = {
        backgroundColor : 'white',
        color: 'black'
    };


    // state for toggle and style of the button
    const [toggle, setToggle] = useState<boolean>(true);
    const [styleButton, setStyleButton] = useState<styleTypeButton>(initialButtonStyle);

    const handleToggle = ():void => {
        // on the basis of updated toggle value, we are updating the style of button
        setToggle(prevToggle => {
            prevToggle = !prevToggle;
            setStyleButton(prevToggle ? {
                backgroundColor : 'white',
                color: 'black'
            } : {
                backgroundColor : 'black',
                color: 'white'
            })
            return prevToggle;
        });
    };
    return(
        <div>
            <h2>Toggle Button</h2>
            <button style={styleButton} onClick={handleToggle}> Toggle </button>
            <hr />
        </div>
    )
}

export default ToggleSwitch;