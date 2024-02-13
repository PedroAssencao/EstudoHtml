import React, { useState } from 'react';
import Header from './header'
import Centro from './Centro'

function container() {

    const [locate, setLocate] = useState('');

    const handleLocateChange = (novaLocate) => {
      setLocate(novaLocate);
    };

    return (
        <div className='container my-auto bg-white border rounded-5' style={{maxWidth: "26rem", minHeight: "40rem" }}>
           <Header onLocateChange={handleLocateChange} />
            <Centro locate={locate} />
        </div>
    )
}

export default container