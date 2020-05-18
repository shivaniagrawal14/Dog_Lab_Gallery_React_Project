import React from 'react';
import './stylesheet.css';
import BreedSelect from './BreedSelect';

class Header extends React.Component {

  capitalize(title) {
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

  render() {
    return (
      <section className='innerbox head1'>
        <h1 className='headerh1'><span class='head2'>{this.props.title && this.capitalize(this.props.title)}</span> Dog Gallery</h1>
        <p className='head_sub'>ITMD-565 - sagrawal3@hawk.iit.edu</p>

        {this.props.breeds && <BreedSelect breeds={this.props.breeds} bars={this.props.action} />}
      </section>
    );
  }
  
}

export default Header;