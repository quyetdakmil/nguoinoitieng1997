$(function (){
  $.ajax({
    type: 'GET',
    url: '/api/celebrities',
    success: function(data){
      $.each(data, function(index, element) {
        $('#ahihi').append(
          '<div style="width: 400px; height: 300px;" class="col-md-4" id="'+ element.id+ '">' + 
          '<div class="card mb-4 box-shadow">'+
          '<img style="width: 300px; height: 250px;"  class="card-img-top" src="' + element.image_url + '" alt="Card image cap">'+
          '<div class="card-body">'+
          '<h3 class="card-text">' + element.name + '</h3>'+
          '<p class="card-text">' + element.description + '</p>'+
          '<div class="d-flex justify-content-between align-items-center">'+
          '<div class="btn-group">'+
          '<a href="#" class="btn btn-success my-2" data-toggle="modal" onclick="SelectData(' + element.id + ');" data-target="#createModal2">Update</a>'+
          '<button type="button" class="btn btn-danger my-2" onclick="Delete(' + element.id + ');">Delete</button>'+
          '</div>'+
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>'
          );
      });
    }
  });
});

function Delete(id) {
  $.ajax({
    url: 'api/celebrities/' + id,
    type: 'delete',
    success: function(result) {
      document.getElementById(id).remove();   
    }
  });
};

var ID = 2;

function Create() {
  ID++;
  id = ID;
  var image_url = document.getElementById('imagelink');
  var description = document.getElementById('description');
  var name = document.getElementById('name');
  var celebrities = {
    image_url: image_url.value,
    name: name.value,
    description: description.value
  };
  $.ajax({
    type: 'POST',
    url: '/api/celebrities',
    dataType: 'json',
    data: celebrities,
    success: function(data){
      $('#ahihi').append(
        '<div style="width: 400px; height: 300px;" class="col-md-4" id="'+ id.value + '">' + 
        '<div class="card mb-4 box-shadow">'+
        '<img style="width: 300px; height: 250px;"  class="card-img-top" src="' + image_url.value + '" alt="Card image cap">'+
        '<div class="card-body">'+
        '<h3 class="card-text">' + name.value + '</h3>'+
        '<p class="card-text">' + description.value + '</p>'+
        '<div class="d-flex justify-content-between align-items-center">'+
        '<div class="btn-group">'+
        '<a href="#" class="btn btn-primary my-2" data-toggle="modal" onclick="SelectData(' + element.id + ');" data-target="#createModal2">Update</a>'+
        '<button type="button" class="btn btn-primary my-2" onclick="Delete(' + id.value + ');">Delete</button>'+
        '</div>'+
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
        );
    }
  });
};

// function Update() {
//   var id = document.getElementById('id');
//   var image_url = document.getElementById('imagelink2');
//   var description = document.getElementById('description2');
//   var name = document.getElementById('name2');
//   var celebrities = {
//     image_url: image_url.value,
//     name: name.value,
//     description: description.value,
//   };
//   $.ajax({
//     type: 'PUT',
//     url: '/api/celebrities' + id.value,
//     dataType: 'json',
//     data: celebrities,

//     success: function(data){
//       var CL = '<div class="card mb-4 box-shadow">'+
//         '<img style="width: 300px; height: 250px;"  class="card-img-top" src="' + image_url.value + '" alt="Card image cap">'+
//         '<div class="card-body">'+
//         '<h3 class="card-text">' + name.value + '</h3>'+
//         '<p class="card-text">' + description.value + '</p>'+
//         '<div class="d-flex justify-content-between align-items-center">'+
//         '<div class="btn-group">'+
//         '<a href="#" class="btn btn-primary my-2" data-toggle="modal" onclick="SelectData(' + element.id + ');" data-target="#createModal2">Update</a>'+
//         '<button type="button" class="btn btn-sm btn-outline-secondary" onclick="Delete(' + id.value + ');">Delete</button>'+
//         '</div>'+
//         '</div>' +
//         '</div>' +
//         '</div>';
//         document.getElementById(id.value).innerHTML = CL;
//     }
//   });
// };

// function SelectData(id)
// {
//   document.getElementById('celeID').value = id;
//   var x = document.getElementById(id);
//   $('#name2').val(x.children[0].textContent);
//   $('#description2').val(x.children[0].textContent);
//   $ ('#imagelink2').val(x.children[0].getAttribute('src'));

// }


