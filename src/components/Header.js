import React from 'react';
import './stk_stylesheet.css';
import BreedSelect from './BreedSelect';

class Header extends React.Component {

  capitalize(imag1) {
    return imag1.charAt(0).toUpperCase() + imag1.slice(1);
  }

  render() {
    return (
      <section className='innerbox stk_heading'>
        <h1 className='stk_heading1'><span class='imag1'>{this.props.imag1 && this.capitalize(this.props.imag1)}</span> Dog Gallery</h1>
        <p className='stk_subheading'>ITMD-565-sagrawal4@hawk.iit.edu</p>

        {this.props.breeds && <BreedSelect breeds={this.props.breeds} bars={this.props.action} />}
      </section>
    );
  }
  
}

export default Header;