const phoneBooks = [];
function addContact(ten, soDienThoai, email) {
    if (phoneBooks.some(lienHe => lienHe.ten === ten)) {
        console.log(`Liên hệ với tên ${ten} đã tồn tại.`);
        return;
    }
    phoneBooks.push({ ten, soDienThoai, email });
    console.log(`Đã thêm liên hệ ${ten} với số điện thoại ${soDienThoai} và email ${email}.`);
}

function displayContact() {
    if (phoneBooks.length === 0) {
        console.log('Danh bạ trống.');
        return;
    }
    console.log('Danh bạ:');
    phoneBooks.forEach((lienHe, idx) => {
        console.log(`${idx + 1}. Tên: ${lienHe.ten}, SĐT: ${lienHe.soDienThoai}, Email: ${lienHe.email}`);
    });
}

addContact('An', '0123456789', 'an@gmail.com');
addContact('Quỳnh Anh', '0987654321', 'quanh@gmai.com');
addContact('An', '0112233445', 'an2@gmai.com');
displayContact();   