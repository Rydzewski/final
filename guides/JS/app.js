function renderGuides(guide_list) {
    // sort the data by sales descending
    guide_list.sort(function(a, b){
        return b.revenue - a.revenue;
    });

    //select the <tbody> element
    var tbody = document.querySelector("tbody"); 

    //clear existing content 
    tbody.textContent = "";

    // for each element in the array...
    for (var i =0; i< guide_list.length; i++){
        var guide = guide_list[i];
    // render that guides record as a tr with td
    //and append it to the <tbody> element 
        tbody.appendChild(renderGuide(guide));
    }
}
function renderGuide(guide) {
    //create the <tr> element
    var tr = document.createElement("tr");

//create and append the <td> elements
    tr.appendChild(renderGuideProp(guide.title, true));
    tr.appendChild(renderGuideProp(guide.topic));
    tr.appendChild(renderGuideProp(guide.date));

    // return the table row to the caller
    return tr;
}
function renderGuideProp(content, nonNumeric) {
    //create the new <td> element 
    var td = document.createElement("td");

    // sets its text content to the provided content 
    td.textContent = content;

// if it should be formatted as nonNumeric
    if (nonNumeric) {
        //add the "nonNumeric" style class
        td.classList.add("nonNumeric");
    }
    // return the new element to the caller
    return td;
}
//enable Dynamic Filtering 
var input = document.getElementById("guide-filter");
input.addEventListener("input", function(){
    var filteredGuides = GUIDES.filter(function(guide){
        var index = guide.title.toLowerCase () .indexOf (input.value.toLowerCase());
        if (index == -1) {return false;} 
            else {return true;}
    });
   renderGuides(filteredGuides);
});