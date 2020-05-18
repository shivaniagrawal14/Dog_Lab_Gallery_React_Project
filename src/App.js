import React from 'react';
import './App.css';
import Header from './components/Header';
import FeaturedImage from './components/FeaturedImage';
import ImageGrid from './components/ImageGrid';
import API from './components/DogGalleryApi';

class App extends React.Component {

constructor(props) {
super(props);
this.state = {
      breeds: null,
      stk_bre_select: [],
      stk_breed: null,
      stk_breed_array: null,
      imag1: null
    };

    this.getListByBreed = this.getListByBreed.bind(this);
    this.handleSelectDog = this.handleSelectDog.bind(this);
  }

  getMostThreeBreeds(list) {
    let stk_bre_default = ['clumber', 'briard', 'germanshepherd'];
    let stk_bre_select = [];

    Object.keys(list).map((item) => {
      for (let i = 0; i < stk_bre_default.length; i++) {
        if (stk_bre_default[i] === item) {
           return stk_bre_select.push(item);
        }
      }
    });

    this.setState({stk_bre_select: stk_bre_select});

    return stk_bre_select;
  }

  getSelectedBreed(breed) {
    API.get('/breed/' + breed + '/images').then(response => {
      this.setState({
        stk_breed: response.data.message[0],
        stk_breed_array: response.data.message,
        imag1: breed
      });
    })
    .catch(e => {
      console.log(e);
    });
  }

  getListByBreed(breed) {
    this.getSelectedBreed(breed);
  }

  handleSelectDog(id) {
    this.setState({
      stk_breed: this.state.stk_breed_array[id]
    })
  }

  componentDidMount() {
    
    API.get('/breeds/list/all').then(response => {
      this.setState({breeds: this.getMostThreeBreeds(response.data.message)});
      this.getSelectedBreed(this.state.stk_bre_select[0]);
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    return (
      <div className="App container-md">
        {this.state.breeds && 
          <Header imag1={this.state.imag1} breeds={this.state.breeds} action={this.getListByBreed} />
        }
        {this.state.stk_breed && 
          <FeaturedImage stk_breed={this.state.stk_breed} />
        }
        {this.state.stk_breed_array &&
          <ImageGrid stk_breed_array={this.state.stk_breed_array} handleClick={this.handleSelectDog}/>
        }
      </div>
    );
  }
  
}

export default App;