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




