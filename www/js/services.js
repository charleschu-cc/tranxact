angular.module('tranxact.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Paradise-Dynasty',
    time: '12.27pm 06-05-2016',
    logo: 'http://www.changiairport.com/content/cag/en/shop-and-dine/dining/paradise-dynasty.img.png',
    total: '$53.65'
  }, {
    id: 1,
    name: 'NTUC Fairprice',
    time: '10.12am 03-05-2016',
    logo: 'http://www.fairprice.com.sg/wps/wcm/connect/f78fde16-ab34-49f2-9551-1bfa058a6f2f/FP+U+Logo.jpg?MOD=AJPERES&CACHEID=f78fde16-ab34-49f2-9551-1bfa058a6f2f',
    total: '$103.55'
  }, {
    id: 2,
    name: 'Fun Toast',
    time: '11.38am 03-05-2016',
    logo: 'http://www.thestarvista.com/en/-/media/cma-malls/websites/logos_180/f/funtoast_180.jpg?w=200&h=200',
    total: '$2.60'
  }, {
    id: 3,
    name: 'Sushi Express',
    time: '8.10pm 25-04-2016',
    logo: 'http://www.imm.sg/en/-/media/cma-malls/websites/tenant%20image%20folder/sushi%20express%20logo.jpg?w=200&h=200',
    total: '$78.60'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
