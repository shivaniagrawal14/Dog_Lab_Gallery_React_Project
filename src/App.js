import React from 'react';
import './App.css';
import Header from './components/Header';
import FeaturedImage from './components/FeaturedImage';
import ImageGrid from './components/ImageGrid';
import API from './services/DogGalleryApi';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      breeds: null,
      arr_select_fr_breed: [],
      Breed_default: null,
      Breed_def_arr: null,
      imag1: null
    };

    this.getListByBreed = this.getListByBreed.bind(this);
    this.handleSelectDog = this.handleSelectDog.bind(this);
  }

  getMostThreeBreeds(list) {
    let def_arr = ['poodle', 'chow', 'bulldog'];
    let arr_select_fr_breed = [];

    Object.keys(list).map((item) => {
      for (let i = 0; i < def_arr.length; i++) {
        if (def_arr[i] === item) {
           return arr_select_fr_breed.push(item);
        }
      }
    });

    this.setState({arr_select_fr_breed: arr_select_fr_breed});

    return arr_select_fr_breed;
  }

  getSelectedBreed(breed) {
    API.get('/breed/' + breed + '/images').then(response => {
      this.setState({
        Breed_default: response.data.message[0],
        Breed_def_arr: response.data.message,
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
      Breed_default: this.state.Breed_def_arr[id]
    })
  }

  componentDidMount() {
    
    API.get('/breeds/list/all').then(response => {
      this.setState({breeds: this.getMostThreeBreeds(response.data.message)});
      this.getSelectedBreed(this.state.arr_select_fr_breed[0]);
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
        {this.state.Breed_default && 
          <FeaturedImage Breed_default={this.state.Breed_default} />
        }
        {this.state.Breed_def_arr &&
          <ImageGrid Breed_def_arr={this.state.Breed_def_arr} handleClick={this.handleSelectDog}/>
        }
      </div>
    );
  }
  
}

export default App;