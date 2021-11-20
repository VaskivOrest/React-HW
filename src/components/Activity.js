import React from 'react';
const Activity = (icons) => {
    return (
        <div className = 'activity'>
           <img src = {icons.img} alt = {icons.type}/>
        </div>
    );
}
export default Activity;