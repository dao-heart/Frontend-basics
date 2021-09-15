
const getRandomID = () => Math.random().toString().substring(2,10)

let commentObj = {
    parentId: null,
    id: getRandomID(),
    commentText: "",
    children:[]
    // other things like `likes` etc.
}

const commentBox = document.getElementById("comments");

const commentInput = document.getElementById("my-input");

const commentsList = document.getElementById("comments-list");

const submitButton = document.getElementsByClassName("submit");


const getComments = () => JSON.parse(localStorage.getItem('comments'))


const setComments = (commentList) => {
    localStorage.setItem('comments',JSON.stringify(commentList))
}



// Main Comment
const addComment = (e) => {
     let commentValue = commentInput.value
     let commentObj = getComments()
     
     let newComment = {
        parentId: null,
        id: getRandomID(),
        commentText: commentValue,
        children:[]
        // other things like `likes` etc.
    }

     if (!commentObj){
         setComments([newComment])
     }
     else{
       let newCommentObj = [...commentObj, newComment]
         setComments(newCommentObj)
     }
     commentInput.value =""
     finalView()
    }

const commentCard = (comment, padding=0) => {
    return `<div style="margin-left:${padding}px; border:1px solid; border-color:green" data-parentid=${comment.parentId} id=${comment.id}>
    <p>${comment.commentText} </p>
    <a href='#'>Reply</a>
    <span>${comment.children.length>0?comment.children.length : ""}</span>
    </div>`
}

const recursiveView = (comment, padding=0)=> {
    let view = commentCard(comment,padding)
    if (comment.children.length > 0){
        for (let child of comment.children){
            view +=recursiveView(child, padding + 20)
        }
    }
    return view
}

const finalView = () => {
    let view = ""
    let commentObj = getComments()
    for (let comment of commentObj){
        view += recursiveView(comment)
    }
    commentsList.innerHTML = view
}
finalView()


const replyView = (parentId) => {
    let div = document.createElement('div');
    div.innerHTML =  `<input name="reply-input" data-parentid = ${parentId} placeholder="Reply here" width="full-width"/>
    <a href = "#">Add comment</a>
    `
    return div
}

const addChildComment = (commentObj, newComment) =>{
    
    if (commentObj.length > 0){
        for (let comment of commentObj){
            console.log(comment.id, newComment.parentId)
        if (comment.id === newComment.parentId){
            comment.children.push(newComment)
        }
        else {
            addChildComment(comment.children, newComment)
        }

    }}
    
    setComments(commentObj)

}


// Delegate event 

commentsList.addEventListener('click', (e) => {
    const parentNode = e.target.parentNode
    const targetName = e.target.innerText
    const parentId = parentNode.getAttribute('id')
    switch (targetName){
        case "Reply":
            parentNode.appendChild(replyView(parentId))
            // Hide the Reply Button
            e.target.style.display = "none"
            break
        case "Add comment":
            let inputValue = parentNode.children[0].value
            let parentIdDataset = parentNode.children[0].dataset.parentid
            let newComment = {
                parentId: parentIdDataset || parentId,
                id: getRandomID(),
                commentText: inputValue,
                children:[]
            }
            addChildComment(getComments(), newComment)
            finalView()
            break;
    }
})




console.log(getComments())




