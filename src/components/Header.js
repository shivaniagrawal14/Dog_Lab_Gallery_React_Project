import React from 'react';
import './stylesheet.css';
import BreedSelect from './BreedSelect';

class Header extends React.Component {

  capitalize(imag1) {
    return imag1.charAt(0).toUpperCase() + imag1.slice(1);
  }

  render() {
    return (
      <section className='innerbox head1'>
        <h1 className='headerh1'><span class='head2'>{this.props.imag1 && this.capitalize(this.props.imag1)}</span> Dog Gallery</h1>
        <p className='head_sub'>SHIVANI AGRAWAL</p>

        {this.props.breeds && <BreedSelect breeds={this.props.breeds} bars={this.props.action} />}
      </section>
    );
  }
  
}

export default Header;