const spbc = sanpham.filter(item => item.loai === "bán chạy");




for (let i = 0; i < spbc.length; i++) {
    document.getElementById("spbc").innerHTML +=
    `
    <div class="col-md-3">
        <div class="card">
            <img class="card-img-top" src="./imges/${spbc[i].hinh}" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${spbc[i].ten}</h4>
                <p class="card-text">${spbc[i].gia}</p>
                <button class="btn btn-primary" onclick='detail(${spbc[i].id})' }>Chi tiết</button>
                <button class="btn btn-primary" onclick='addCart(this)' }>Add Card</button>
            </div>
        </div>
    </div>
    `
    console.log(spbc[i].id)
}

function detail(i){
    window.location.href=`detail.html?id=${i}` // chuyển sang trang detail.html
}