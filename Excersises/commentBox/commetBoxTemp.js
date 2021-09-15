
const mainComment = document.getElementById("my-input")

const commentList = document.getElementById("comments-list")

const getComments = () =>{
    return JSON.parse(localStorage.getItem("comments"))
}

const setComments = (comments = []) =>{
    localStorage.setItem("comments", JSON.stringify(comments))
} 


let addComment = () => {
    let comments= []
	if (!getComments()) {
		// let comments = [];
        // localStorage.setItem("comments", JSON.stringify(comments));
        setComments()
	}

    comments = getComments();
	comments.push({
		parentId: null,
		commentId: Math.random()
			.toString()
			.substr(2, 7),
		commentText: mainComment.value,
		childComments: [],

	});
	setComments(comments)
    mainComment.value = "";
    finalCommentViewPage();
};


let singleCommentCard = (obj, padding) =>{
let element = `
<div style = "margin-left: ${padding}px; border: 2px solid green;" data-parentid="${obj.parentid}" id="${obj.commentId}">
    <p>${obj.commentText}</p>
    
    <a href = '#'> Reply <a/> <span>${obj.childComments.length === 0 ? "": obj.childComments.length}</span>
    
</div>
`
return element
}



let createRecursiveView = (commentList, padding=0) =>{
    
    let finalView = "";
    for (let comment of commentList){
        finalView += singleCommentCard(comment, padding)
        if (comment.childComments.length > 0){
            finalView += createRecursiveView(comment.childComments, padding+20)

        }
    }
    return finalView
}

let finalCommentViewPage = () =>{

    let comments = getComments();
    if (comments){
        let fullView = createRecursiveView(comments)
        commentList.innerHTML = fullView;
    }

}
finalCommentViewPage();


let createReplyView = (id) =>{
    let div = document.createElement('div')
    let inputElement = `
    <input 
    placeholder = "Reply here"
    data-parentid = "${id}"
    />
    <a href = "#">Add comment</a>
    `
    div.innerHTML = inputElement
    return div;

}

let addChildComment = (allComments, newComment) =>{
    console.log({allComments, newComment})
    for ( let comment of allComments){
        console.log({comment,newComment})
        if (comment.id === newComment.parentid){
            comment.childComments.push(newComment)
        }
        else if (comment.childComments.length > 0) {
            addChildComment(comment.childComments, newComment)
        }

    }

}

// Add event delegation to the comment list
commentList.addEventListener("click", function(e){

    let parentNode = e.target.parentNode;

    switch (e.target.innerText){

        case "Reply":
            let parentId = e.target.parentNode.dataset.parentid || e.target.parentNode.getAttribute("id")
			
            parentNode.append(
                createReplyView(parentId)
            )
            e.target.style.display = "none"
            break
        case "Add comment":
            let inputValue = parentNode.children[0].value
            console.log()
            let newComment = {
                parentid: e.target.parentNode.dataset.parentid || e.target.parentNode.getAttribute("id"),
                commentId: Math.random()
                    .toString()
                    .substr(2, 7),
                commentText: inputValue,
                childComments: [],
            }
            let allComments = getComments()
            
            addChildComment(allComments, newComment);
            setComments(allComments)
            finalCommentViewPage();
            break    
    }})





