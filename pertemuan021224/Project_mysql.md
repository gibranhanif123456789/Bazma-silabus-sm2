### create tabel pendapatan
CREATE TABLE Pendapatan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tanggal_transaksi DATE NOT NULL,
    keterangan VARCHAR(255) NOT NULL,
    jumlah DECIMAL(10, 2) NOT NULL,
    catatan TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

### Tabel Pengeluaran
CREATE TABLE Pengeluaran (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tanggal_transaksi DATE NOT NULL,
    keterangan VARCHAR(255) NOT NULL,
    jumlah DECIMAL(10, 2) NOT NULL,
    catatan TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_pendapatan INT,
    FOREIGN KEY (id_pendapatan) REFERENCES Pendapatan(id)
);


### tabel Tabungan
CREATE TABLE Tabungan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tanggal_transaksi DATE NOT NULL,
    keterangan VARCHAR(255) NOT NULL,
    jumlah DECIMAL(10, 2) NOT NULL,
    catatan TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_pendapatan INT,
    FOREIGN KEY (id_pendapatan) REFERENCES Pendapatan(id)
);

### tabel investasi
CREATE TABLE Investasi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tanggal_transaksi DATE NOT NULL,
    keterangan VARCHAR(255) NOT NULL,
    jumlah DECIMAL(10, 2) NOT NULL,
    catatan TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_pendapatan INT,
    FOREIGN KEY (id_pendapatan) REFERENCES Pendapatan(id)
);


### insert data


### pendapatan
INSERT INTO Pendapatan (tanggal_transaksi, keterangan, jumlah, catatan)
VALUES
    ('2024-02-01', 'Gaji Bulan Januari', 5000.00, 'Pendapatan rutin'),
    ('2024-02-02', 'Bonus Tahun Baru', 1000.00, 'Pendapatan tambahan'),
    ('2024-02-03', 'Dividen Saham', 800.00, 'Pendapatan investasi'),
    ('2024-02-04', 'Honor Proyek', 1200.00, 'Pendapatan tambahan'),
    ('2024-02-05', 'Gaji Bulan Februari', 5500.00, 'Pendapatan rutin');


### pengeluaran
INSERT INTO Pengeluaran (tanggal_transaksi, keterangan, jumlah, catatan, id_pendapatan)
VALUES
    ('2024-02-01', 'Belanja Bulanan', 1500.00, 'Makanan dan kebutuhan rumah tangga', 1),
    ('2024-02-02', 'Tagihan Listrik', 200.00, 'Pembayaran tagihan bulanan', NULL),
    ('2024-02-03', 'Makan di Luar', 300.00, 'Makan malam bersama teman', 2),
    ('2024-02-04', 'Transportasi', 50.00, 'Ojek online', 4),
    ('2024-02-05', 'Belanja Bulanan', 1200.00, 'Makanan dan kebutuhan rumah tangga', 5);

### Tabungan
INSERT INTO Tabungan (tanggal_transaksi, keterangan, jumlah, catatan, id_pendapatan)
VALUES
    ('2024-02-01', 'Menabung', 500.00, 'Tabungan bulanan', 1),
    ('2024-02-02', 'Menabung', 300.00, 'Tabungan tambahan', NULL),
    ('2024-02-03', 'Menabung', 200.00, 'Tabungan investasi', 3),
    ('2024-02-04', 'Menabung', 100.00, 'Tabungan tambahan', 4),
    ('2024-02-05', 'Menabung', 400.00, 'Tabungan bulanan', 5);


### Investasi
INSERT INTO Investasi (tanggal_transaksi, keterangan, jumlah, catatan, id_pendapatan)
VALUES
    ('2024-02-01', 'Investasi Saham', 1000.00, 'Pembelian saham perusahaan X', 1),
    ('2024-02-02', 'Investasi Reksa Dana', 800.00, 'Pembelian unit reksa dana', NULL),
    ('2024-02-03', 'Investasi Obligasi', 500.00, 'Pembelian obligasi pemerintah', 3),
    ('2024-02-04', 'Investasi Properti', 2000.00, 'Pembelian properti', 4),
    ('2024-02-05', 'Investasi Emas', 700.00, 'Pembelian emas batangan', 5);


### Join
<!-- pendapatan dan penegeluaran -->
SELECT *
FROM Pendapatan
INNER JOIN Pengeluaran ON Pendapatan.id = Pengeluaran.id_pendapatan;

<!-- pendapatan pengeluaran dan tabungan -->
SELECT *
FROM Pendapatan
INNER JOIN Pengeluaran ON Pendapatan.id = Pengeluaran.id_pendapatan
INNER JOIN Tabungan ON Pendapatan.id = Tabungan.id_pendapatan;

<!-- left join  -->
SELECT *
FROM Pendapatan
LEFT JOIN Pengeluaran ON Pendapatan.id = Pengeluaran.id_pendapatan;

SELECT *
FROM Pendapatan
LEFT JOIN Pengeluaran ON Pendapatan.id = Pengeluaran.id_pendapatan
LEFT JOIN Tabungan ON Pendapatan.id = Tabungan.id_pendapatan;


<!-- right join -->
SELECT *
FROM Pendapatan
RIGHT JOIN Pengeluaran ON Pendapatan.id = Pengeluaran.id_pendapatan;

SELECT *
FROM Pendapatan
RIGHT JOIN Pengeluaran ON Pendapatan.id = Pengeluaran.id_pendapatan
RIGHT JOIN Tabungan ON Pendapatan.id = Tabungan.id_pendapatan;

### update
-- Mengupdate jumlah tabungan pada tanggal tertentu
UPDATE Tabungan
SET jumlah = 700.00
WHERE tanggal_transaksi = '2024-02-02';
d
