import React from 'react';

const Input = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    className = '',
    error,
    autoComplete = false
}) => {
    return (
        <div className='mb-3  '>
            <input
            autoComplete={autoComplete}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`px-3 w-full py-[1.5rem] placeholder-black border rounded-[1.375rem] ${className}`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default Input;
