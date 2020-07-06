import React from 'react';


function Header(){
    return(
        <div className="entireHeader">
            <div className="headerNav">
             <p><a href="/">home</a></p>
             <p><a href="/about">about</a></p>
             <p><a href="/experience">experience</a></p>
             <p><a href="/work">work</a></p>
            </div>
        </div>
    )
    
}

export default Header;