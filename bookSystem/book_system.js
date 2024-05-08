let books=[];

function addBook(){
    const bookName=document.getElementById('bookName').value;
    const authorName=document.getElementById('authorName').value;
    const bookDescription=document.getElementById('bookDescription').value;
    const pagesNumber=document.getElementById('pagesNumber').value;

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book={
            name:bookName,
            authorName:authorName,
            bookDescription:bookDescription,
            pagesNumber:pagesNumber
        };

        books.push(book);
        showbooks();
        clearInputs();

    }else{
        alert("please fill all the fields correctly");
    }
}

function showbooks(){
    const bookDiv=books.map((book,index)=>`<h1>book Number:${index+1}</h1>
    <p><strong>Book Name:</strong>${book.name}</p>
    <p><strong>Author Name:</strong>${book.authorName}</p>
    <p><strong>Book Description:</strong>${book.bookDescription}</p>
    <p><strong>No, of Pages:</strong>${book.pagesNumber} mins</p>
    <button onclick="editbook(${index})">Edit</button>
    <button onclick="deletebook(${index})">Delete</button>
    `);
    document.getElementById('books').innerHTML=bookDiv.join('');
}

function clearInputs(){
    document.getElementById('bookName').value='';
    document.getElementById('authorName').value='';
    document.getElementById('bookDescription').value='';
    document.getElementById('pagesNumber').value='';
}

function deletebook(index){
    books.splice(index,1)
    showbooks();
}

