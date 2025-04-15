//megubah konten html
document.getElementById('judul').innerHTML = "<h1>JavaScript</h1>";
let nama = "Sanjaya";
let umur = 17;
document.getElementById('nama').innerHTML = "Nama Saya : " + nama;
document.getElementById('umur').innerHTML = `Umur Saya : ${umur} tahun`;

let mahasiswa =["Cristian","Kolin","Xavero"];
console.log(mahasiswa);
mahasiswa.forEach( (mhs) => {
    document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li>`
});
let nilai = [
    {nama:"Kelvin",nilai: "A"},
    {nama:"Ernest",nilai: "A"},
    {nama:"Michael",nilai: "A"},
];
nilai.forEach( (nli)=>{
    document.getElementById('nilai').innerHTML 
    += `<tr>
        <td>${nli.nama}</td> 
        <td>${nli.nilai}</td>
    </tr>`
});

//public APi BMKG
fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json')
.then(Response => Response.json())
.then(data => {
    console.log(data);
    data.Infogempa.gempa.forEach((data)=>{
        document.getElementById('gempa').innerHTML +=`<div class="container">
    <div class="row">
        <div class="col-md-3"><p>${data.Wilayah}</p> <p>${data.Tanggal}</p> <p>${data.Jam}</p> <p>${data.Potensi}</p></div>
    </div>
    </div>
`;
    })
    
})