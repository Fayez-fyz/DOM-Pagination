async function getData() {
  try {
   const response = await fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
   const data = await response.json();
   const noOfPages = Math.ceil(data.length / 10);
   const pagination = document.createElement('div')
   pagination.setAttribute('class',' pagination pagination-container pl-4 d-flex justify-content-sm-center py-4 ')
    document.body.append(pagination)

   for (let i = 1; i <= noOfPages; i++) {
     const page = document.createElement("button");
     page.setAttribute('class','btn btn-outline-secondary ')
     page.innerText = i;
     // page
     page.onclick = function () {
       console.log("clicked...", i);
       const pageUsers = data.filter((user, index) =>
         filterUsers(index, (i - 1) * 10, i * 10)
         );
 
    
       document.querySelector(".container").remove();
       loadTable(pageUsers);
     };
     pagination.append(page);
   }
 
   const firstTenUsers = data.slice(0, 10);
   console.log(firstTenUsers);
 
   console.log("No of users are ", data.length);
   
   loadTable(firstTenUsers);
   
      
   function filterUsers(index, startIdx, endIdx) {
    return index >= startIdx && index < endIdx;
  }
 
  } 
  
  
  catch (error) {
      throw console.log("FAILED",error);
  }
 

 
}

function loadTable(data){
  var container = document.createElement('div')
  container.setAttribute('class','container')
  var table = document.createElement('table')
  table.setAttribute('class','table table-dark')
  table.setAttribute('id','our-table')
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  var th1 =document.createElement('th')
  var th2 =document.createElement('th')
  var th3 =document.createElement('th')
  var tbody = document.createElement('tbody')
  tbody.setAttribute('class','table-body')
  tbody.setAttribute('id','crypto-table-body')
  th1.innerText = 'ID'
  th2.innerText ='NAME'
  th3.innerText = 'EMAIL'

  
  tr.append(th1,th2,th3);
  thead.append(tr);
  table.append(thead);
  table.append(tbody)
  container.append(table);
  
document.body.append(container)

  for(i=0;i<data.length;i++){ 
    var tr1= document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')

    td1.innerText = data[i].id;
    td2.innerText = data[i].name;
    td3.innerText = data[i].email;

    tr1.append(td1,td2,td3)
    tbody.append(tr1);
    
  }

}

function init() {
  getData();
}
 init();