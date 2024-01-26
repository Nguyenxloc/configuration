import React, { Component } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
class SideBar extends Component {
    render() {
        return (
            <Sidebar backgroundColor={"white"} width={"220px"}>
                <Menu
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    color: disabled ? 'white' : 'black',
                                    backgroundColor: active ? '#eecef9' : undefined,
                                };
                        },
                    }}
                >
                    <p className="ms-3"><strong><i className="bi bi-database-check me-2"></i>CryptoChecker</strong></p>
                    <MenuItem active={true} component={<Link to="/" />}><i className="bi bi-house me-2"></i>Home</MenuItem>
                    <MenuItem component={<Link to="/calendar" />}><i className="bi bi-chat-left-dots me-2"></i>Hi</MenuItem>
                    <MenuItem component={<Link to="/e-commerce1" />}><i className="bi bi-cast me-2"></i>Stream</MenuItem>
                    <MenuItem component={<Link to="/e-commerce2" />}><i className="bi bi-people me-2"></i>Group</MenuItem>
                    <MenuItem component={<Link to="/e-commerce3" />}><i className="bi bi-three-dots me-2"></i>More</MenuItem>
                </Menu>
            </Sidebar>
        );
    }
}
export default SideBar;