import React, {useCallback, useState} from 'react';

const BackButton = ({setPage,setWallet}) => {
    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: '#fffcfc',
        cursor: 'pointer',
        width:'30px',
        height:'30px',
        transition: 'background-color 0.3s ease',
        borderRadius: '50%',
        border:'none',
        textAlign: 'center',
        lineHeight:"10px"

    });
    const setter = useCallback(() => {
        // Your function logic here
        setPage(1);
        setWallet(false);
    }, []);
    const handleMouseEnter = () => {
        setButtonStyle({
            ...buttonStyle,
            backgroundColor: '#eff3f8',
        });
        // this.setPage(1);
        // this.setWallet(false);
    };

    const handleMouseLeave = () => {
        setButtonStyle({
            ...buttonStyle,
            backgroundColor: '#fffcfc',
        });
    };

    return (
        <div className="d-flex flex-row mb-3" style={{height:30}}>
            <button
                className="mt-2"
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={setter}
            >
                <i className="bi bi-arrow-left"></i>
            </button>
            <div className="p-2">Back</div>
        </div>
    );
};

export default BackButton;