
function validatePlayersName(userField) {
    if (/^\s*[A-Za-z]+\s*[A-Za-z]*\s*$/.test(userField.value)) {
        return "";
    } else {
        alert("Invalid Name Format");
    }

} function validateNumber(userField) {

  
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(userField.value)) {
       
        return "";
    }
    else {
        alert("Invalid Number Format");
    }
   
}

function writeFile() {
    
    var file = new ActiveXObject("Scripting.FileSystemObject");
    var a = file.CreateTextFile("testfile.txt", true);
    a.WriteLine("test");
    a.Close();
}