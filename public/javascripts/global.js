$(document).ready(function(){
    populateTable(); // populateTable function
});

 
// Add a function show files with in the table

function populateTable() {

    // Empty content string
    var tableContent = ''; // it a variable

    // jQuery AJAX call for JSON
    $.getJSON('/download', function( data ) { // get files as data
        for(var item in data) { // one by one get and add fortable
            if(data[item] == "download")
                continue;
            tableContent += '<tr>';
            tableContent += '<td>' + data[item] + '</td>'; // this file name column
            tableContent += '<td><a href='+'/'+data[item]+'>' + data[item]+ '</a></td>'; // this was the link column
        }

        // this all added into the tableContent variable
        $('#download table tbody').html(tableContent); // add into the table
    });
};