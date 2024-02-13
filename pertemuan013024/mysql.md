### pertemuan 1

### Cara Membuat database Baru

buka terminal, lalu ketikan 'mysql -u root -p'
passwordnya (enter aja)

### cara membuat database baru 

berikan kode yang ada di module dengan cara `create databse nama-database`;
CREATE DATABASE nama_database;

### Membuat tabel baru di smk personal
disini kita akan membuat tabel baru dengan nama biodata dan kolmunya;
create table biodata(
- id, nama, kelas, jurusan, umur:
-id int primary key not null,
-nama varchar(255),
-kelas varchar(10),
-jurusan varchar(255),
-umur int,
)
### lihat data biodata
dapat menggunakan query desc biodata ;
dapat jug amenggunakan select * from biodata

###  Menambahkan data ke tabel biodata
Menambhakan data baru dengan query berikut:
insert into biodata (id, nama, kelas, jurusan, umur) values (1,"Gibran", "XI", "SIJA", "17");

### mencari data berdasarkan id
query :
select * from biodata where id = ?

### memfilter data berdasarkan kelas
select * from biodata where kelas = 'XI';

### update data berdasarkan id
UPDATE biodata SET NAMA= "namanya" where id-3

### hapus berdasarkan id
delet from biodata where id = ?


select * from TABEL where condition;

### cara2
select ..., ..., from biodata where alamat = ? and kapasitas_siswa = ? and jurusan ?;

...sql
select * from biodata
WHERE (jurusan = 'Sija' AND kapasitas_siswa > 200 )
OR (jurusan = 'RPL' AND kapasitas_siswa =<300);


### NOT
..sql
..alamat
select *from biodata where not alamat = 'bogor';

...jurusan
slelct * from biodata where not jurusan = 'sija';

Select *from biodata 
wshere jurusan = 'sija' and not alamat = 'bogor';

select *from biodata
where not in ('bogor','jakarta')


## order by

descending => dimulai dari tulisan z -a /id/ cretaed_at (tanggal-buat)
-asecending => dimulai dari a-z/id/created_at (tanggal-buat)

select * from biodata order by jurusan desc;

select * from biodata order by jurusan asc;


### limit
..membatasi jumlah data
slelct * from table order by jurusan desc  limit 6;
..membatasi jumlah dengan desc/asc
select *from table order by condition limit 6;

..dengan where dan membatasi jumlah dengan desc /asc
select * from table
where condition 
limit limitation

select *  from sekolahan where jurusan= "RPL"  and kapasitas_siswa;




### Like

% huruf %

jamal => huruf %

jamal => huruf%
asep => %huruf / a__p



select * from sekolahan where nama_sekolah LIKE 'A%';
..mencari sekolah dengan awalan a
select * from sekolahan where nama_sekolah LIKE '%a';
..mencari skeolah dengan di awalai huruf belakang
select mencari data dengan huruf keseluruhan
select * from sekolahan where nama_sekolah LIKE '%udin%';

select * from  sekolahan WHere jurusan like '%I%'


### aliases
...sql
select fields as asfield
from table

nama_sekolah = namaSekolah, kapasitas_siswa=kpasitas,alamat = tempat

..nama sekolah
select nama_sekolah as namaSekolah from sekolahan;

select id, nama_sekolah as namaSekolah, jurusan, kapasitas_siswa as kapasitasSiswa frm skolahan;

camelCase = snake_case

### in 
..sql select column_case(s)
from table_name 
where column_name in (select statement );

select from tabel 
where condition in(s)

select * from 


pertama kita akan membuat table perpustakaan ketik di terminal kode berikut
membuat table perpustakaan

create table perpustakan(
    -> id int primary key auto_increment not null,
    -> judul varchar(400),
    -> kategori varchar(255),
    -> deskripsi text,
    -> penulis varchar(255),
    -> penerbit varchar(255),
    -> tahun_terbit int,
    -> jumlah_halaman int,
    -> batas_umur int,
    -> isbn int,
    -> harga int);      

kemudian kita menginput data yang akan kita masukan dalam table, keitkan kode berikut di terminal;
UPDATE nama_tabel SET harga = 15000 WHERE batas_umur BETWEEN 10 AND 15;
menginput data
insert into perpustakan (judul, kategori, deskripsi, penulis, penerbit, tahun_terbit, jumlah_halaman,batas_umur,isbn,harga)values("belajar aja dulu","codng","Belajar coding","maman","ngodingmulu",2019,2022,45,123,22000);


1. tugas 1 memfilter berdasarkan tahun terbit
2. Cari data dengan (like) = judul, kategori, penulis
kenapa muncul semua karena kategorinya semua sama makanya muncul semua, yang kedua kenapa cuma muncul satu karna kita make nama penulis dan judulnya aja 
3. Data id Desc
mengurutkan berdasarkan id yang paling besar atau data yang paling baru di tambahkan;
4. Filtering jumlah halaman >= & < & = (bebas)
karna kita menggunakan and jadi lebih spesifik dan hanya 1 data yang memenuhi kategori;
5. Tahun terbit >= 2020 =< 2026
muncul 5 data karna pada buku ke 6 itu tahun rilisnya tidak memenuhi kategori
6. Batas Umur dimulai dari 8 s/d 20
muncul 2 data karna sisanya tidak memiliki kategori atau umurnya lebih dari 20
7. Harga dimulai dari desc / asc
mengurutkan berdasarkan harga yang paling murah atau yang terkecil
8. Harga range dari bebas - bebas (1  - 100000000)
yang keluar hanya 3 data karna harga nya kurang diantara 20000 dan di bawah 30000
9. Harus ada update delete
ada 2 yang terupdate data harganya dana ada 2 yang terhapus datanya karna tidak memenuhi syarat;

cukup sekian wasalamualaikum;
