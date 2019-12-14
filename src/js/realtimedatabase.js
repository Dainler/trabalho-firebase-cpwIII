{

  var usersList = document.querySelector('#usersList');
  var nameInput = document.querySelector('#nameInput');
  var ageInput = document.querySelector('#ageInput');
  var addButton = document.querySelector('#addButton');


  // Ao clicar no botão
  addButton.addEventListener('click', function () {
    create(nameInput.value, ageInput.value);
  });

  // Função para criar um registro no Firebase
  function create(name, age) {
    var data = {
      name: name,
      age: age
    };

    return firebase.database().ref().child('users').push(data);
  }

  firebase.database().ref('users').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
      var li = document.createElement('li');      
      li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().age));      
      usersList.appendChild(li);
    });
  });

}