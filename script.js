const form = document.getElementById("form");
const tabel = document.getElementById("tabel");

function load(){
    const data = JSON.parse(localStorage.getItem("osis")) || [];
    tabel.innerHTML = "";
    data.forEach((d,i)=>{
        tabel.innerHTML += `
        <tr>
            <td>${d.nama}</td>
            <td>${d.jabatan}</td>
            <td>${d.kelas}</td>
            <td><button class="delete" onclick="hapus(${i})">X</button></td>
        </tr>`;
    });
}

form.addEventListener("submit", e=>{
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("osis")) || [];
    data.push({
        nama: nama.value,
        jabatan: jabatan.value,
        kelas: kelas.value
    });
    localStorage.setItem("osis", JSON.stringify(data));
    form.reset();
    load();
});

function hapus(i){
    const data = JSON.parse(localStorage.getItem("osis")) || [];
    data.splice(i, 1);
    localStorage.setItem("osis", JSON.stringify(data));
    load();
}

load();
