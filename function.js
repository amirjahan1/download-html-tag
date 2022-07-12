function saveFile() {
    const imageLink = document.createElement("a"); // Important
    const chartJs = document.getElementById("download-line-chart"); // you can change id # id = tag id
    imageLink.download = "cleansing.jpeg"; // you can change name of file, can be dynamic
    imageLink.href = chartJs.toDataURL("image/jpeg", 1); // you can change type of image, can be dynamic
    imageLink.click();
  }
