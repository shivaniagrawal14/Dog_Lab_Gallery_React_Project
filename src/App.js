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
      Breed_sel: [],
      Breed_default: null,
      Breed_defaultList: null,
      imag1: null
    };

    this.getListByBreed = this.getListByBreed.bind(this);
    this.handleSelectDog = this.handleSelectDog.bind(this);
  }

  getMostThreeBreeds(list) {
    let defaultList = ['poodle', 'chow', 'bulldog'];
    let Breed_sel = [];

    Object.keys(list).map((item) => {
      for (let i = 0; i < defaultList.length; i++) {
        if (defaultList[i] === item) {
           return Breed_sel.push(item);
        }
      }
    });

    this.setState({Breed_sel: Breed_sel});

    return Breed_sel;
  }

  getSelectedBreed(breed) {
    API.get('/breed/' + breed + '/images').then(response => {
      this.setState({
        Breed_default: response.data.message[0],
        Breed_defaultList: response.data.message,
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
      Breed_default: this.state.Breed_defaultList[id]
    })
  }

  componentDidMount() {
    
    API.get('/breeds/list/all').then(response => {
      this.setState({breeds: this.getMostThreeBreeds(response.data.message)});
      this.getSelectedBreed(this.state.Breed_sel[0]);
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
        {this.state.Breed_defaultList &&
          <ImageGrid Breed_defaultList={this.state.Breed_defaultList} handleClick={this.handleSelectDog}/>
        }
      </div>
    );
  }
  
}

export default App;