
$.messageTemplate.listItems.addEventListener('itemclick', function(e){
   if(e.bindId === "shareButton"){
      $.shareTemp.ventana.show();
   }
});
var hideShare = function(){
   $.shareTemp.ventana.hide();
};

$.shareTemp.LabelIconoCerrar.addEventListener('click', hideShare);

$.shareTemp.ventana.addEventListener('click', hideShare);



var data = [
    {
        titulo: "Muppet face MAN",
        cancion: "Mana mana victor",
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


var dataToView = [];
_.each(data, function(item){
   var process = {
      searchableText: item.titulo,
      itemTitle : {
         text : item.titulo
      },
      itemDesc : {
         text : item.cancion
      },
      itemTagIcon : {
         text : item.categoria
      },
      imagen : {
         image : item.avatar
      },
      imagenContent : {
         image : item.articulo
      }
   };

   dataToView.push(process);
});

$.messageTemplate.section.setItems(dataToView);

$.index.open();
