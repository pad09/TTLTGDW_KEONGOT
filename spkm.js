const spkm = sanpham.filter(item => item.loai === "khuyến mãi");




for (let i = 0; i < spkm.length; i++) {
    document.getElementById("spkm").innerHTML +=
    `
    <div class="col-md-3">
        <div class="card">
            <img class="card-img-top" src="./imges/${spkm[i].hinh}" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${spkm[i].ten}</h4>
                <p class="card-text">${spkm[i].gia}</p>
                <button class="btn btn-primary" onclick='detail(${spkm[i].id})' }>Chi tiết</button>
            </div>
        </div>
    </div>
    `
    console.log(spkm[i].id)
}

function detail(i){
    window.location.href=`detail.html?id=${i}` // chuyển sang trang detail.html
}