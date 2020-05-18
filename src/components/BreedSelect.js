import React from 'react';
import './stk_stylesheet.css';

class BreedSelect extends React.Component {

  BreedChang(event) {
    this.props.bars(event.target.value);
  }

  render () {
    return (
      <section className='breed_stk'>
        <div className='stk_form'>
          <label>Select Breed:</label>
          <select className='stk_cus' onChange={(event) => this.BreedChang(event)}>
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