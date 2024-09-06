document.getElementById("btn-generator").addEventListener('click', function() {

fetch('https://api.imgflip.com/get_memes')
.then(response=>response.json())
.then(data=>{
    const memes = data.data.memes;
    const random = memes[Math.floor(Math.random() *memes.length)]
    document.getElementById('meme').src = random.url;


const downloadBtn = document.getElementById('download-btn');
          downloadBtn.href = random.url; 
          downloadBtn.style.display = 'inline'; // 
        })
        .catch(error => console.error('Error fetching meme:', error));

});