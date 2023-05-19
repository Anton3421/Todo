import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function TabApp() {
    const [value, setValue] = useState('one')

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (<div>
        <Tabs value={value} onChange={handleChange}>
            <Tab value="one" label="HOME" />
            <Tab value="two" label="TODOS" />
            
        </Tabs>
        {value === 'one' && <div>Welcome</div>}
        {value === 'two' && <div></div>}
        
    </div>

    );
}

export default TabApp;
