import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image } from '../../types';

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&orientation=landscape&client_id=LnZsAA1aXqZdP-LQvBcGTBuHzPUwMb7a8VgX-21IfNE`
        );
        
        if (response.data.results.length === 0) {
          setImages([]);  
          setError(`No images found for "${query}".`);
          return;
        }

        setImages(prevImages => {
          return page === 1 ? response.data.results : [...prevImages, ...response.data.results];
        });
      } catch {
        setError('Failed to fetch images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };



  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {loading && <Loader />}
          {images.length > 0 && !loading && (
            <LoadMoreBtn onClick={loadMoreImages} />
          )}
        </>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
