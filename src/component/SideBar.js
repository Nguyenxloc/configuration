import React, {useState} from 'react';
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
export default function SideBar(props) {
    const [x1,setX1] = useState(true);
    const [x2,setX2] = useState(false);
    const [x3,setX3] = useState(false);
    const [x4,setX4] = useState(false);
    const [x5,setX5] = useState(false);
    const resetAll = () => {
        setX1(false);
        setX2(false);
        setX3(false);
        setX4(false);
        setX5(false);
    };
    return (
        <Sidebar backgroundColor={"white"} width={"220px"}>
            <Menu
                menuItemStyles={{
                    button: ({level, active, disabled}) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                            return {
                                color: disabled ? 'white' : 'black',
                                backgroundColor: active ? '#eecef9' : undefined,
                            };
                    },
                }}
            >
                <p className="ms-3 mt-3" style={{fontSize: 20}}><strong><i className="bi bi-database-check me-2"></i>CryptoChecker</strong>
                </p>
                <MenuItem active={x1} onClick={()=> (props.onClickFunction(1),resetAll(),setX1(true))} ><i className="bi bi-house me-2"></i>Home</MenuItem>
                <MenuItem active={x2} onClick={()=> (props.onClickFunction(2),resetAll(),setX2(true))}><i className="bi bi-calculator"></i> Calculator</MenuItem>
                <MenuItem active={x3} onClick={()=> (props.onClickFunction(3),resetAll(),setX3(true))}><i className="bi bi-cast me-2"></i>#New feature 2</MenuItem>
                <MenuItem active={x4} onClick={()=> (props.onClickFunction(4),resetAll(),setX4(true))}><i className="bi bi-people me-2"></i>#New feature 3</MenuItem>
                <MenuItem active={x5} onClick={()=> (props.onClickFunction(5),resetAll(),setX5(true))}><i className="bi bi-three-dots me-2"></i>#New feature 4</MenuItem>
            </Menu>
        </Sidebar>
    );
}