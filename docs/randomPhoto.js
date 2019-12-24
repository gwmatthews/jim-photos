var imlocation = "img/";
 var currentdate = 0;
 var image_number = 0;
 function ImageArray (n) {
   this.length = n;
   for (var i =1; i <= n; i++) {
     this[i] = ' ';
   }
 }
 image = new ImageArray(15);
 image[0] = '01.jpg';
 image[1] = '02.jpg';
 image[2] = '03.jpg';
 image[3] = '04.jpg';
 image[4] = '05.jpg';
 image[5] = '06.jpg';
 image[6] = '07.jpg';
 image[7] = '08.jpg';
 image[8] = '09.jpg';
 image[9] = '10.jpg';
 image[10] = '11.jpg';
 image[11] = '12.jpg';
 image[12] = '13.jpg';
 image[13] = '14.jpg';
 image[14] = '15.jpg';
 var rand = 60/image.length;
 function randomimage() {
 	currentdate = new Date();
 	image_number = currentdate.getSeconds();
 	image_number = Math.floor(image_number/rand);
 	return(image[image_number]);
 }
 document.write('<div class="photo-box"><img src="'+ imlocation + randomimage()+ ' " alt="medium-photo"></div>');
