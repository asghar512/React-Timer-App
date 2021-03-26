import React from 'react'
import './TimerButton.css'


type Props = {
    buttonAction: () => void;
    buttonValue: String;
    isOn: boolean;
}

const TimerButton : React.FC<Props> = ({buttonAction, buttonValue, isOn}) => {
    return (
        <div className="timer-button" onClick={buttonAction}>
            {buttonValue === "start" ? 
            <p style={{color:'white'}}> 
                {isOn ? 
                <i className="fa fa-pause btn-b"></i> :
                <i className="fa fa-play btn-b"></i>
                }
            PLAY            </p> :
            <p style={{color:'white'}}><i className="fa fa-step-backward btn-b" ></i>Reset</p>
            }
        </div>
    )
}

export default TimerButton