function AddImageForm({addImage}){
    return(
        <>
            <h3>Add a new post?</h3>
            <form
                className="add-image-form"
                onSubmit={(e)=>{
                    e.preventDefault()
                    // @ts-ignore
                    addImage(e.target.title.value, e.target.url.value)
                }}
                >
                <input type="text" name="title" placeholder="Add Image Title" id="" required />
                <input type="url" name="url" placeholder="Add Image Url" id="" required />
                <button type="submit">Add Image</button>
            </form>
        </>
    )
}
export default AddImageForm