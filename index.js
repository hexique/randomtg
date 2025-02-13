let result_message = null;
let og_link;
function copy(){
    if(result_message === null){
        submit();
    }
    navigator.clipboard.writeText(`${og_link}/${result_message}`)
}

function submit(){
    let link = document.getElementById("link").value;
    const id = link.split("/")[link.split("/").length - 1];
    if(isNaN(Number(id))){
        window.alert("Invalid link. Example: https://t.me/c/1234567890/9999");
    } else {
        og_link = link.split("/").slice(0, -1).join("/");
        console.log(`ID: ${id}; Link: ${link}; Slice: ${og_link}`);
        result_message = `${Math.floor(Math.random() * Number(id))}`;
        document.getElementById("result").innerHTML = `<a href="${og_link}/${result_message}/" target="_blank"><h2>${og_link}/${result_message}</h2></a>`
    }
}