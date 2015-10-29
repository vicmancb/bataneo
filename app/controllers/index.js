

$.headerReq.appNameView.addEventListener('click', function(){
   alert('hola');
});

var data = [
    {
        titulo: "Muppet face MAN",
        cancion: "Mana mana song",
        categoria: "humor",
        avatar: "http://s70427.gridserver.com/bataneo/assets/images/icon_user.jpg",
        articulo: "http://s70427.gridserver.com/bataneo/assets/images/img_bataneo.jpg",
        visitas: "34.7K"
    },
    {
        titulo: "Muppet Imagen 2",
        cancion: "Mana mana song",
        categoria: "humor",
        avatar: "http://s70427.gridserver.com/bataneo/assets/images/icon_user.jpg",
        articulo: "http://s70427.gridserver.com/bataneo/assets/images/img_bataneo.jpg",
        visitas: "23.1K"
    },
    {
        titulo: "Muppet Imagen 3",
        cancion: "Mana mana song",
        categoria: "humor",
        avatar: "http://s70427.gridserver.com/bataneo/assets/images/icon_user.jpg",
        articulo: "http://s70427.gridserver.com/bataneo/assets/images/img_bataneo.jpg",
        visitas: "12.5K"
    },
    {
        titulo: "Muppet Imagen 4",
        cancion: "Mana mana song",
        categoria: "humor",
        avatar: "http://s70427.gridserver.com/bataneo/assets/images/icon_user.jpg",
        articulo: "http://s70427.gridserver.com/bataneo/assets/images/img_bataneo.jpg",
        visitas: "9.2K"
    },
    {
        titulo: "Muppet Imagen 5",
        cancion: "Mana mana song",
        categoria: "humor",
        avatar: "http://s70427.gridserver.com/bataneo/assets/images/icon_user.jpg",
        articulo: "http://s70427.gridserver.com/bataneo/assets/images/img_bataneo.jpg",
        visitas: "4.7K"
    },
    {
        titulo: "Muppet Imagen 6",
        cancion: "Mana mana song",
        categoria: "humor",
        avatar: "http://s70427.gridserver.com/bataneo/assets/images/icon_user.jpg",
        articulo: "http://s70427.gridserver.com/bataneo/assets/images/img_bataneo.jpg",
        visitas: "8.3K"
    }
];

var data2 = [
   {
      searchableText: "pruebaa 1",
      itemTitle : {
         text : "pruebaaa1"
      }
   },
   {
      searchableText: "pruebaa 2",
      itemTitle : {
         text : "pruebaaa2"
      }
   }
];

var data3 = [];
_.each(data, function(item){
   var process = {
      searchableText: item.titulo,
      itemTitle : {
         text : item.titulo
      }
   };

   data3.push(process);
});

$.messageTemplate.section.setItems(data3);




$.index.open();
