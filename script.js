function downloadFile() {
    // Create a link element
    var link = document.createElement('a');
    
    // Set the file path and name
    var filePath = '/asset/myrun.apk';
    var fileName = 'myrun.apk';
    
    // Set the download attribute
    link.setAttribute('href', filePath);
    link.setAttribute('download', fileName);
    
    // Simulate a click event on the link
    link.click();
  }