import React from 'react';

const Header = ({text}) => {
    return (

     
        <header>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>

       
      

    );
};
Header.defaultProps={
  text : 'Toufiq'           
}

export default Header;