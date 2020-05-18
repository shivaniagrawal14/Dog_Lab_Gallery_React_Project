import React from 'react';
import './stylesheet.css';

class ImageGrid extends React.Component {

  Click_image(id) {
    this.props.handleClick(id);
  }

  render() {
    return (
      <section className='innerbox image3 clearfix'>
        {this.props.Breed_def_arr && this.props.Breed_def_arr.map((item, index) => 
          <div className='cc' onClick={() => this.Click_image(index)} key={index}>
            <img src={item} className='card-img-top' alt='...' />
          </div>
        )}
      </section>
    );
  }
  
}

export default ImageGrid;