let tbody = document.querySelector("tbody")
datas = []
fetch("https://northwind.vercel.app/api/suppliers")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    for(i=0;i<data.length;i++) {
      tbody.innerHTML += `<tr>
            <th scope="row">${data[i].companyName}</th>
            <td>${data[i].contactName}</td>
            <td>${data[i].contactTitle}</td>
            <td>${data[i].id}</td>
            <td>
            <a href="viewbtn.html?id=${data[i].id}" style="color:blue" class="btn"><i class="fa-solid fa-eye" ></i></a>
            <a href="edit.html?id=${data[i].id}" style="color:yellow" class="btn"><i class="fa-solid fa-screwdriver-wrench"></i></i></a>
            <a href="remove.html?id=${data[i].id}" style="color:red" class="remove"><i class="fa-solid fa-trash"></i></a>
            </td>
            </tr>`
          }
  })
