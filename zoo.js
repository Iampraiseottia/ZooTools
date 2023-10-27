//BAR-CHART
var bars = document.getElementsByClassName("bar");
for (var i = 0; i < bars.length; i++) {
  var randomHeight = Math.floor(Math.random() * 150) + 50;
  bars[i].style.height = randomHeight + "px";
}

//TABLE

//Creating the array of data

var tableArray = [
  {
    'email': 'puala.suarze@con...es',
    'friendsInvited': '6,500',
    'country': 'USA'
  },

  {
  'email': 'laura.kenet..3@yahoo.com',
  'friendsInvited': '2,300',
  'country': 'Monaco'
  },

  {
  'email': 'aaron.michael@arg.org',
  'friendsInvited': '1,200',
  'country': 'Prague'
  },

  {
    'email': 'jeremy.runner@aol.com',
    'friendsInvited': 900,
    'country': 'China' 
  }

]

makeTable(tableArray)

function makeTable(data){
  var table = document.getElementById('displayTable');

  for (var i = 0; i < data.length; i++){
    var row = `
      <tr>
          <td>${data[i].email}</td>
          <td>${data[i].friendsInvited}</td>
          <td>${data[i].country}</td>
      </tr>
    `

    table.innerHTML += row;

  }
}