function toggleMenu() {
    var x = document.getElementById("test");


     if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("main-id").style.width = "80%";
    } else {
        x.style.display = "none";
        document.getElementById("main-id").style.width = "100%";
    }

}

$('#singleUploadForm').submit(function(event) {
    var formElement = this;
    // You can directly create form data from the form element
    // (Or you could get the files from input element and append them to FormData as we did in vanilla javascript)
    var formData = new FormData(formElement);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://localhost:8081/upload",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            singleFileUploadSuccess.innerHTML = "<p>File Uploaded Successfully.</p> <p>DownloadUrl : <a href='" + response.url+ "' target='_blank'>" + response.url + "</a></p> <p>Name of the file: </p>" + response.name;

        },
        error: function (error) {
            console.log(error);
            // process error
        }
    });

    event.preventDefault();
});