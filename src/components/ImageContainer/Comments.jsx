function Comments({article, addComment, deleteComment}){
    return (
        <ul className="comments">
            {article.comments.map(comment=>{
                return <li>
                            {comment.content}
                            <span
                                onClick={()=>{
                                    deleteComment(comment.id, article.id)
                                }}
                            >X</span>
                        </li>
            })}
            <form className="comment-form"
                    onSubmit={(e)=>{
                        e.preventDefault()
                        // @ts-ignore
                        addComment(article, e.target.comment.value)
                        // @ts-ignore
                        e.target.reset()
                    }}        
            >
                <input
                    className="comment-input"
                    type="text"
                    name="comment"
                    placeholder="Add a comment..."
                /> 
                <button className="comment-button" type="submit">Post</button>
            </form >
        </ul>
    )
}
export default Comments