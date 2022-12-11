const url = new URL(window.location.href);
const params = url.searchParams;
const id = params.get('id');
let row = document.querySelector(".container .row")
fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then(res => res.json())
    .then(data => {
        row.innerHTML += `<div class="col-sm-6">
        <div class="card">
            <div class="card-body">
            <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.companyName}" id="companyname" >
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.contactName}" id="contactname" >
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.contactTitle}" id="contacttitle" >
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.id}" id="id" >
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.address?.phone}" id="phone" >
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                // aria-describedby="inputGroup-sizing-sm" value="${data.address?.country}" id="country" >
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.address?.city}" id="city" >
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                // aria-describedby="inputGroup-sizing-sm" value="${data.address?.postalCode}" id="postalCode" >
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.address?.street}" id="street" >
        </div>
                
                <a href="" class="btn btn-primary" id="btn3">Delete</a>
            </div>
        </div>
    </div>`
        let btn = document.querySelector("#btn3")
        btn.addEventListener("click",function(e){
            alert("Removed from API")
            e.preventDefault()
            let companyname=document.querySelector("#companyname")
            let contactname=document.querySelector("#contactname")
            let contacttitle=document.querySelector("#contacttitle")
            let id=document.querySelector("#id")
            let phone=document.querySelector("#phone")
            let street=document.querySelector("#street")
            let country=document.querySelector("#country")
            let city=document.querySelector("#city")
            let postalCode=document.querySelector("#postalCode")

            let obj={
                contactname:contactname.value,
                contacttitle:contacttitle.value,
                id:id.value,
                companyname:companyname.value,
                city:city.value,
                phone:phone.value,
                postalCode:postalCode.value,
                country:country.value,
                street:street.value
            }
            window.sessionStorage.setItem("obj", JSON.stringify(obj))
            fetch(`https://northwind.vercel.app/api/suppliers/${data.id}`,{
                method:"DELETE",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(obj)
            })
            .then(res=>console.log(res))
        })
    })
