import type { ReactNode } from "react";
import React from "react";


const Box = ({children}: {children :ReactNode}) => {
    const boxStyle: React.CSSProperties = {
        width: '200px',
        border: '1px solid #000',
        padding: '20px',
        margin: '5px'


    }

    return(
        <div>
            <h2>박스 모델</h2>
            <div style={boxStyle}>{children}</div>
        </div>
    )
}


export default Box;