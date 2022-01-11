function Comments({article, addComment}){
    return (
        <ul className="comments">
            {article.comments.map(comment=>{
                return <li>{comment.content}</li>
            })}
            <form className="comment-form"
                    onSubmit={(e)=>{
                        e.preventDefault()
                        // @ts-ignore
                        addComment(article, e.target.comment.value)
                    }}        
            >
                <input
                    className="comment-input"
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Add a comment..."
                /> 
                <button className="comment-button" type="submit">Post</button>
            </form >
        </ul>
    )
}
export default Comments