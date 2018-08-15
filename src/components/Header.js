import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';


//returns header elements of searchbox and navigation
class Header extends React.Component {
    render() {
      return(
        <div>
          <SearchForm />
          <Navigation />
        </div>
    );
  }
}
export default Header;
