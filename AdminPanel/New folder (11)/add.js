let button=document.querySelector("#button")
button.addEventListener("click",function(){
    let companyname=document.querySelector("#companyname")
    let contactname=document.querySelector("#contactname")
    let contacttitle=document.querySelector("#contacttitle")
    let id=document.querySelector("#id")
    let phone=document.querySelector("#phone")
    let country=document.querySelector("#country")
    let city=document.querySelector("#city")
    let code=document.querySelector("#code")
    let street=document.querySelector("#street")
    let obj={
        contactname:contactname.value,
        contacttitle:contacttitle.value,
        id:id.value,
        companyname:companyname.value,
        phone:phone.value,
        street:street.value,
        country:country.value,
        code:code.value,
        city:city.value
    }
    fetch("https://northwind.vercel.app/api/suppliers",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then(res=>console.log(res))
})



