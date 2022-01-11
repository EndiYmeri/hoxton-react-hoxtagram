function LikeSection({likes}){
    return (
        <div className="likes-section">
                <span className="likes">{likes} likes</span>
                <button className="like-button">♥</button>
            </div>
    )
}
export default LikeSection