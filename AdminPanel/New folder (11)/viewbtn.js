const url = new URL(window.location.href);
const params = url.searchParams;
const id = params.get('id');
let row = document.querySelector(".row")

fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        row.innerHTML += `<div class="col-sm-6">
        <div class="card">
            <div class="card-body">
            <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend" >
                <span class="input-group-text" id="inputGroup-sizing-sm"  style="width:10rem" >Company Name</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.companyName}"  disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"  style="width:10rem" >Contact Name</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.contactName}" disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"  style="width:10rem" >Contact Title</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.contactTitle}" disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"  style="width:10rem ">ID</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.id}" disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"  style="width:10rem" >Phone</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.address?.phone}" disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"  style="width:10rem" >Country</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                // aria-describedby="inputGroup-sizing-sm" value="${data.address?.country}" disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"  style="width:10rem" >City</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.address?.city}" disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"  style="width:10rem" >Postal Code</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                // aria-describedby="inputGroup-sizing-sm" value="${data.address?.postalCode}" disabled>
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"  style="width:10rem" >Street</span>
            </div>
            <input type="text" class="form-control" aria-label="Small"
                aria-describedby="inputGroup-sizing-sm" value="${data.address?.street}" disabled>
        </div>
                
                
                <a href="index.html" class="btn btn-primary">Go back</a>
            </div>
        </div>
    </div>`
    })
