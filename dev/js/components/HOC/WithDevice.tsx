import React from 'react';
import {SizeMe} from 'react-sizeme';

export default DevicedComponent => (props) => {
    return (
        <SizeMe>
            {({size}) => <DevicedComponent isMobile={size.width < 740} {...props} />}
        </SizeMe>
    )
}