let links = document.querySelectorAll('a');
for(let i=0; i<links.lenght; i++){
    let link = links[i];
    if(link.atta)
    link.addEventListener('click', function(){
        alert("bro");
    });
}
links[1].addEventListener('click', function(){
    alert("bro");
});

