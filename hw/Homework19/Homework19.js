// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg,
//  9.jpg Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const img = document.createElement('img');
const body = document.querySelector('body');
const imgArray =['https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg','https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp','https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww','https://images.tennis.com/image/private/t_q-best/tenniscom-prd/a34ajom83aptn8iwwodh.jpg','https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text.png','https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text.png','https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg','https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg','https://www.imgworlds.com/_next/static/media/captain-america.0b21db41.png'];
body.appendChild(img)
const index = Math.floor(Math.random()* imgArray.length)
img.src = imgArray[index]

