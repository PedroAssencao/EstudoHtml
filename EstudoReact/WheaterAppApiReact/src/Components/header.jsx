// Header.js
import React, { useState } from 'react';

function Header({ onLocateChange }) {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleButtonClick = () => {
        onLocateChange(input);
    };

    return (
        <div className='container-fluid p-2 mt-4 d-flex justify-content-between align-itemns-center'>
            <div className='p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
            </div>
            <div className='p-0 my-auto' style={{ width: '16rem' }}>
                <input
                    onChange={handleInput}
                    value={input}
                    type='text'
                    id='LocateInput'
                    className='border-0 form-control'
                    placeholder='Insira Sua Localização'
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                />
            </div>
            <button
                onClick={handleButtonClick}
                className='bg-info rounded-pill d-flex justify-content-center align-items-center my-auto'
                style={{ width: '3rem', height: '3rem' }}
            >
                   <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>
        </div>
    );
}

export default Header;
