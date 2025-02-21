import React from 'react';

const Input = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    className = '',
    error
}) => {
    return (
        <div className='mb-3  '>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`px-3 w-full     py-[0.5rem] md:py-2 placeholder-black border rounded-md ${className}`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default Input;
