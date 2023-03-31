import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import * as API from './Api/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    searchText: '',
    images: [],
  };

  // викликаємо по кліку на пошук. перезаписуємо стейт
  createSearchText = searchText => {
    this.setState({ searchText });
  };

  // метод, который вызывается при обновлении и перерисовке компоненты.
  // Цей метод не викликається під час першого рендеру
  componentDidUpdate(prevProps, prevState) {
    const searchText = this.state.searchText.trim();
    if (prevState.searchText !== searchText && searchText) {
      API.fetchImages(searchText).then(({ hits, totalHits }) => {
        this.setState({ images: hits });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar createSearchText={this.createSearchText} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
