var giohang = JSON.parse(localStorage.getItem('luugiohang')) || [];

function addCart(x) {
    let ten = x.parentElement.children[0].innerText;
    console.log(ten);

    let hinh = x.parentElement.parentElement.children[0].src;
    console.log(hinh);

    let gia = x.parentElement.children[1].innerText;
    console.log(gia);

    let soluong = 1;
    console.log(soluong);

    //tạo đối tượng
    let item = {
        ten: ten,
        hinh: hinh,
        soluong: soluong,
        gia: gia,
    }
    if (giohang.length == 0) {

        giohang.push(item);

    } else {

        var foundIndex = -1;

        for (let i = 0; i < giohang.length; i++) {

            if (giohang[i].ten == ten) {
                foundIndex = i;
                break;
            }
        }

        // Nếu sản phẩm đã tồn tại
        if (foundIndex > -1) {

            giohang[foundIndex].soluong++;

        } else {

            giohang.push(item);
        }
    }

    // Hiển thị lại cart
    //viewcart();

    // Lưu localStorage
    localStorage.setItem(
        'luugiohang',
        JSON.stringify(giohang)
    );

    viewcart();

}

console.log(giohang);

function viewcart() {

    var kq =
        ` <thead class="table-warning">
        <tr>
            <th>TT</th>
            <th>Tên Sản Phẩm</th>
            <th>Hình Ảnh</th>
            <th>Đơn Giá</th>
            <th>Số Lượng</th>
            <th>Thành Tiền</th>
            <th>Thao Tác</th>
        </tr>
    </thead>
        `

    var tongtien = 0;

    //Phần thân của table
    for (let i = 0; i < giohang.length; i++) {

        let stt = i + 1;

        let thanhtien =
            giohang[i].gia * giohang[i].soluong;

        tongtien += thanhtien;

        kq += `
        <tr>
        <td>1</td>
        <td class="text-start fw-bold">${giohang[i].ten}</td>
        <td><img src="${giohang[i].hinh}" class="rounded border shadow-sm" style="width:100px"></td>
        <td>${giohang[i].gia}</td>
        <td><input type="number" value="${giohang[i].soluong}" class="form-control mx-auto text-center"
                style="width: 70px;"></td>
        <td class="text-danger fw-bold">${thanhtien}</td>
        <td><button class="btn btn-outline-danger btn-sm px-3" onclick="xoa(${i})"><i class="fas fa-trash"></i></button>
        </td>
    </tr>
       `;
    }

    kq +=
        `
        <tfoot class="table-light">
        <tr>
            <td colspan="3" class="text-end fw-bold">Tổng đơn hàng:</td>
            <td colspan="3" class="text-start text-success h5 fw-bold mb-0 text-center">${tongtien}</td>
            <td><button class="btn btn-primary shadow-sm px-4">Thanh Toán</button></td>
        </tr>
    </tfoot>
`;

    document.getElementById('hienthigiohang').style.display = 'block';

    //document.getElementById('chuachonsanpham').style.display = 'none';

    document.getElementById('hienthigiohang').innerHTML = kq;

}

function xoa(obj, i) {

    // Xóa khỏi mảng
    giohang.splice(i, 1);

    // Cập nhật giao diện
    viewcart();

    // Lưu lại localStorage
    localStorage.setItem(
        'luugiohang',
        JSON.stringify(giohang)
    );

    // Nếu cart rỗng
    if (giohang.length === 0) {

        document.getElementById('hienthigiohang').style.display = 'none';

        //document.getElementById('chuachonsanpham').style.display = 'block';
    }
}

viewcart();