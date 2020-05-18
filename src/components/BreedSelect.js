import React from 'react';
import './stylesheet.css';

class BreedSelect extends React.Component {

  BreedChang(event) {
    this.props.bars(event.target.value);
  }

  render () {
    return (
      <section className='breed-s1'>
        <div className='form1'>
          <label>Select Breed:</label>
          <select className='custom-s1' onChange={(event) => this.BreedChang(event)}>
            {this.props.breeds && this.props.breeds.map((item, index) => 
              <option key={index} value={item}>{item}</option>
            )}
          </select>
        </div>
      </section>
    );
  }
  
}

export default BreedSelect;