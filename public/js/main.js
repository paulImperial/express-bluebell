
const links = document.querySelectorAll('a');
links.forEach(element => {element.addEventListener('click', changeLink)});

function changeLink(e){
    e.preventDefault();
    let link = this.href;
    if (link.includes('.html')){
        link = link.replace('.html', '.hbs');
    }
   window.location.replace(link);
};