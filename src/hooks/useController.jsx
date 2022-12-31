import React from 'react';

const useControlled = () => {
    const [value, setValue] = React.useState('');
    function updateValue(fieldValue){ setValue(fieldValue) };
    return {value, updateValue};
}

export default useControlled;