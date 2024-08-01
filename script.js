window.onload = function(){
    let forums=document.getElementsByClassName("forum");
    for(let f of forums)
        f.classList.add("animate__animated");

    let oddForums = document.querySelectorAll(".forum:nth-child(odd)");
    for(let f of oddForums)
        f.classList.add("animate__backInLeft");

    let evenForums = document.querySelectorAll(".forum:nth-child(even)");
    for(let f of evenForums)
        f.classList.add("animate__backInRight");
}  