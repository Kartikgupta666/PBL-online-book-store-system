
function searchImg() {
  // document.getElementById("imgContainer").style.display = "block";
  document.getElementById('imgContainer').innerHTML = "";

  var bookName = document.getElementById('bookName').value;

  fetchImages(bookName);
}



function fetchImages(bookName) {
    var folderPath = 'images/';
    var imgUrl = folderPath + bookName + '.jpg';
  
    var image = document.createElement('img');
    image.alt = bookName + ' Image';
  
    image.onerror = function () {
      document.getElementById('imgContainer').innerText = 'BOOK NOT FOUND';
    };
  
    image.src = imgUrl;
    image.height = 300;
    image.width = 200;
    
  
    document.getElementById('imgContainer').appendChild(image);
  }
 