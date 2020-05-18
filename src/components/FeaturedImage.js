import React from 'react';
import './stk_stylesheet.css';

class FeaturedImage extends React.Component {

  render() {
    return (
      <section className='innerbox stk_feature'>
        <img src={this.props.stk_breed} alt='Dog' width='410' height='410' />
      </section>
    );
  }
  
}
export default FeaturedImage;