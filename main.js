//selecting the active tabs or the page that is shown on the website.
function activate(first, second, third, fourth){
    document.getElementById(first).className = "active";
    document.getElementById(second).className = "none";
    document.getElementById(third).className = "none";
    document.getElementById(fourth).className = "none";
}

//function to change the visibility of the components in website. 
function visible(first, second, third, fourth) {
    document.getElementById(first).style.display = 'block';
    document.getElementById(second).style.display = 'none';
    document.getElementById(third).style.display='none';
    document.getElementById(fourth).style.display='none';
}