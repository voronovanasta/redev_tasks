import './index.css';
import StrPropComponent from './StrPropComponent';

// eslint-disable-next-line react/prop-types
function BoolPropComponent ({isDay, children})  {
    let className = 'wrapper';
    if(isDay) {
        className += ' day';
    }
    else {
        className += ' night';
    }
    return (
    <div className={className}>
        <StrPropComponent time={className.split(' ')[1]}/>
        {children}
    </div>
    
    )
}

export default BoolPropComponent;