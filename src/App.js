import React, {useState} from 'react'
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className = "App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImage = {setSelectedImage}/>
      {selectedImage !== null && <Modal selectedImage = {selectedImage} setSelectedImage = {setSelectedImage}/>}
    </div>
  )
}

export default App
