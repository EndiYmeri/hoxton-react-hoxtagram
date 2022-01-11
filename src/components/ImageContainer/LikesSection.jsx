function LikeSection({article, addLikes}){
    return (
        <div className="likes-section">
                <span className="likes">{article.likes} likes</span>
                <button className="like-button"
                    onClick={()=>{
                        addLikes(article)
                    }}
                >♥</button>
            </div>
    )
}
export default LikeSection