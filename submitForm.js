
      function submitform(){
        var date = document.getElementById("inputDate").value;
        var time = document.getElementById("inputTime").value;
        var food = document.getElementById("inputFood").value;
        var quantity = document.getElementById("inputQuantity").value;

        var row = document.createElement("tr");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        td1.innerHTML = date;
        td2.innerHTML =time;
        td3.innerHTML = food;
        td4.innerHTML = quantity;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        parent.document.getElementById("food_table").appendChild(row);
      }