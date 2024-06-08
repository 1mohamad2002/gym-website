function downloadImage(imageUrl) {
    var link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'Schedule_Fall.jpg';
    link.click();
}
