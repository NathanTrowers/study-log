import './_styles/InfoIcon.css'

const InfoIcon  = ({ infoBubbleText }) => {
    return (
        <>
            <div className='infoIcon'>
                ?
                <div className='infoBubble'>
                    {infoBubbleText}
                </div>
            </div>
        </>
    );
}

export default InfoIcon;
