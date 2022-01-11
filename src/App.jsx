import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ImageContainer from './components/ImageContainer/ImageContainer'

function App() {
  
  const [images, setImages] = useState([])

  function fetchImages(){
    return fetch('http://localhost:3000/images')
    .then(resp => resp.json())
    .then(images => setImages(images))
  }

  useEffect(()=>{
    fetchImages()
  },[])

  function addComment(article, comment){
    fetch(`http://localhost:3000/images/${article.id}/comments`,{
      method:"POST",
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify({
        content: comment,
      })
    }).then(resp => resp.json()).then((image) => {
        setImages([...images, image])})
  }

  return (
      <>
        <Header />
        {
          images? images.map( (article) =>{
            return <ImageContainer article = {article} addComment={addComment} />
          }) : <></>
        }
      </>
  )
}

export default App
