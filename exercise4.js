//contoh output
/*["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.
Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.
["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
Format tanggal pada data adalah dd-mm-YYYY
Misal angka bulan 01, tuliskan "Januari"
Gunakan switch case untuk menuliskan bulan di atas.
Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.
Test-case
Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.
/** */
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 1, "Roman Alamsyah El Sharawy");
    input.splice (2, 1, "Provinsi Bandar Bandung")
    input.splice(4, 1, "Pria")
    input.splice(5, 0, "SMA Internasional Metro")
    console.log(input); // first

    var bulan = input[3] // second
    var arr1 = bulan.split("/")


    switch (arr1[1]) {
        case '01': console.log("January"); break;
        case '02': console.log("February"); break;
        case '03': console.log("Maret"); break;
        case '04': console.log("April"); break;
        case '05': console.log("Mei"); break;
        case '06': console.log("Juni"); break;
        case '07': console.log("July"); break;
        case '08': console.log("Agustus"); break;
        case '09': console.log("September"); break;
        case '10': console.log("October"); break;
        case '11': console.log("November"); break;
        case '12': console.log("December"); break;
        default: break;
    }
    console.log(arr1.join("-"))

    arr1.sort(function(a, b){return b - a});
        console.log(arr1)



    var jadiString = input[1].toString();

    var irisan = jadiString.slice(0,14)
        console.log(irisan)
    }

    dataHandling2(input)

    /**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
