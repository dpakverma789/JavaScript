
function searchFunction(){
    let search_value = document.getElementById('myInput').value.toLowerCase();
    let search_collection = document.getElementById('myUL').children;
    let length_of_list = search_collection.length
    for(let i=0; i < length_of_list; i++){
        let search_result = search_collection[i].textContent.toLowerCase();
        search_collection[i].style.display = (search_value != "" && search_result.indexOf(search_value) == -1)? "none" : "block";  
    }
}