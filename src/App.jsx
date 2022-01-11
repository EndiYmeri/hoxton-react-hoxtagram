import { useEffect, useState } from 'react'
import './App.css'
import AddImageForm from './components/AddImageForm'
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

  function addLikes(article){
    const updatedImages = JSON.parse(JSON.stringify(images))
    const match = updatedImages.find(target => target.id === article.id)

    fetch(`http://localhost:3000/images/${article.id}`,{
      method:"PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        likes: article.likes + 1
      })
    }).then(resp => resp.json()).then(article =>{
      match.likes = article.likes
      setImages(updatedImages)
    })
  }
  function addComment(article, comment){
    const updatedImages = JSON.parse(JSON.stringify(images))
    const match = updatedImages.find(target => target.id === article.id)

    fetch(`http://localhost:3000/comments`,{
      method:"POST",
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify({
        imageId : article.id,
        content: comment,
      })
    }).then(resp=> resp.json()).then(newComment => {
      match.comments.push(newComment)
      setImages(updatedImages)
    })
  }

  function deleteComment(commentId,articleid){

    const updatedImages = JSON.parse(JSON.stringify(images))
    const matchedImage = updatedImages.find(target => target.id === articleid)
    matchedImage.comments = matchedImage.comments.filter(comment => comment.id!== commentId)
    setImages(updatedImages)
    

    fetch(`http://localhost:3000/comments/${commentId}`,{
      method:"DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })

  }

  return (
      <>
        <Header />
        <AddImageForm />
        {
          images? images.map( (article) =>{
            return <ImageContainer article = {article} addComment={addComment} deleteComment={deleteComment} addLikes= {addLikes} />
          }) : <></>
        }
      </>
  )
}

export default App
