

import React, { useState } from 'react';
import { useSpring, config, animated } from "react-spring";


const AnimateNumber = ({children}) => {
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: Number(children),
        delay: 200,
        config: config.molasses,
    })
    return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
};




export default AnimateNumber;