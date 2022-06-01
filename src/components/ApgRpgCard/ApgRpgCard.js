import './ApgRpgCard.scss';
import React, { useRef, useEffect, useState } from 'react';
import BarChart from '../../components/BarChart/BarChart';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';


const ApgRpgCard = ({ barChartRPG, barChartAPG }) => {
    const [statMode, setStatMode] = useState('RPG');
    const [statTitle, setTitleMode] = useState('Rebounds')

    const RPG = barChartRPG;
    const APG = barChartAPG;   


    const onClick = () => { 
        setStatMode((statMode) => (statMode === 'RPG' ? 'APG' : 'RPG')); 
        setTitleMode((statTitle) => (statTitle === 'Rebounds' ? 'Assists' : 'Rebounds')); 
    };
    
    const ref = useRef(null);
    useEffect(() => {
        if (!ref.current) {
            ref.current.setStat(statMode === 'RPG' ? RPG : APG)
            ref.current.setTitle(statTitle === 'Rebounds' ? 'Rebounds' : 'Assists')
        }
    }, [APG, RPG, statMode, statTitle])

    return (
        <article className='barchart'>
            <ToggleBtn onClick={onClick} />
            <h3 className='barchart__title'>APG & RPG</h3>
            <BarChart
                ref={ref}
                data={statMode === "RPG" ? RPG : APG}
                mode={statTitle === "Rebounds" ? "Rebounds" : "Assists"}
            />
        </article>
    );
};

export default ApgRpgCard;