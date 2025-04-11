fetch("https://24252-if21-pw1-omega.vercel.app/javascript/wilayah.json")
.then(response=> response.json())
.then(data => {console.log(data);
    data.forEach( (item) => {
        document.getElementById("list-desa").innerHTML += `<li class="list-group-item" onclick=detail("${item.kode}")>${item.kode} ${item.nama} </li>`
    })
})

function detail(kode){
    console.log(kode);
    document.getElementById('list-cuaca').innerHTML = "";
    fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${kode}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('desa').innerHTML = data.lokasi.desa
        document.getElementById('kecamatan').innerHTML = data.lokasi.kecamatan
        data.data[0].cuaca.forEach((item =>{
            console.log(item);
            item.forEach((cuaca) => {
                document.getElementById('list-cuaca').innerHTML += `
                <div class="col-lg-4 p-2">
                    <div class="card rounded bg-primary">
                        <img class="card-img-top" src="${cuaca.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${cuaca.weather_desc}</h5>
                            <p class="card-text">${cuaca.local_datetime}</p>
                        </div>
                    </div>
                </div>`
            })
            
        }))
    })
}

fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json')
.then(Response => Response.json())
.then(data => {
    console.log(data);
    data.Infogempa.gempa.forEach((data)=>{
        document.getElementById('gempa').innerHTML +=`
        <div class="card">
        <img src="https://data.bmkg.go.id/DataMKG/TEWS/" alt="">
        <p>${data.Wilayah}</p> <p>${data.Tanggal}</p> <p>${data.Jam}</p> <p>${data.Potensi}</p></div>
        <div class="col-lg-4 p-2">
        <div class="card">
        <p>${data.Wilayah}</p> <p>${data.Tanggal}</p> <p>${data.Jam}</p> <p>${data.Potensi}</p></div>
        </div>
        </div>
`;      
    })
    
})