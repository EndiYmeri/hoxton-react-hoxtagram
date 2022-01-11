import Comments from "./Comments"
import LikeSection from "./LikesSection"

function ImageContainer({article, addComment, deleteComment, addLikes}){

    const src = article.image.startsWith('./assets') ? 
    `src/${article.image.slice(2, article.image.length)}` // removes the './' and prepends 'src'. Basically: `./assets/image-name.png` => `src/assets/image-name.png`
    : article.image
    
    return (
        <section className="image-container">
        {/* <!-- This is the HTML for each card. Use the following HTML as reference to build your React components --> */}
            <article className="image-card">
                <h2 className="title">{article.title}</h2>
                <img src={src} className="image" />

                <LikeSection article={article} addLikes={addLikes}/>
                <Comments article ={article} addComment={addComment} deleteComment={deleteComment} />
            </article>
      </section>
    )
}
export default ImageContainer