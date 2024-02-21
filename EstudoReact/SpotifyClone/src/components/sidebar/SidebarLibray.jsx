import SidebarLibrayOptions from "./SidebarLibrayOptions"
import SidebarLibrayFilters from "./SidebarLibrayFilters"
import SidebarLibraySearch from "./SidebarLibraySearch";
import SidebarLibrayCards from "./SidebarLibrayCards";
import React, { useState } from 'react';
function SidebarLibray() {

    const [overflowY, setOverflowY] = useState('hidden');

    const handleMouseEnter = () => {
        setOverflowY('auto');
    };

    const handleMouseLeave = () => {
        setOverflowY('hidden');
    };


    return (
        <div className="container-fluid mt-2 rounded-3 mb-2 p-3" style={{ minHeight: "100vh", backgroundColor: "#121212" }}>
            <div className="container d-flex flex-column">
                <SidebarLibrayOptions />
                <SidebarLibrayFilters />
                <div className="mt-2" style={{ minWidth: "17rem", maxHeight: "74vh", overflowY: overflowY, overflowX: "hidden", transition: "overflow 0.3s ease" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SidebarLibraySearch />
                    <SidebarLibrayCards />
                </div>
            </div>
        </div>
    )
}

export default SidebarLibray