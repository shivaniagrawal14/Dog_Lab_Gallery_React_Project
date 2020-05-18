import React from 'react';
import './stk_stylesheet.css';

class ImageGrid extends React.Component {

  Click_image(id) {
    this.props.handleClick(id);
  }

  render() {
    return (
      <section className='innerbox stk_image_stk clearfix'>
        {this.props.stk_breed_array && this.props.stk_breed_array.map((item, index) => 
          <div className='stk_case' onClick={() => this.Click_image(index)} key={index}>
            <img src={item} className='stk_case-img-top' alt='...' />
          </div>
        )}
      </section>
    );
  }
  
}

export default ImageGrid;