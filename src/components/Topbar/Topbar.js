import React, { Component } from 'react';

//Import Bar
import Bar from "./Bar";

class Topbar extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Render Topbar */}
                <Bar/>
            </React.Fragment>
        );
    }
}

export default Topbar;
