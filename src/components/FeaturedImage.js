import React from 'react';
import './stylesheet.css';

class FeaturedImage extends React.Component {

  render() {
    return (
      <section className='innerbox featured_img1'>
        <img src={this.props.Breed_default} alt='Dog' width='410' height='410' />
      </section>
    );
  }
  
}
export default FeaturedImage;