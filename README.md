# react-starter-template
Ini adalah template repository untuk semua project react NPE Digihouse. Setelah membuat repository baru berdasarkan template ini, lakukan perintah berikut
1. Install dependency
   - Menggunakan `yarn` sebagai package manager  
      `yarn`
   - Menggunakan `npm` sebagai package manager  
      `npm install`
2. Jalankan server dengan menjalankan script `dev` pada `package.json`
   - Menggunakan `yarn` sebagai package manager  
      `yarn dev`
   - Menggunakan `npm` sebagai package manager  
      `npm run dev`
      
## Important
Pastikan untuk selalu menggunakan component `Seo` dari folder `shared/components` pada setiap halaman yang dibuat

## Notes
Template ini berisi beberapa package berikut
1. `vite` sebagai basis development tools
2. `tailwindcss` untuk menggunakan styling berbasis classname
3. `mantine` sebagai ui component, dan menyediakan utility untuk bekerja dengan form, serta beberapa hooks bermanfaat
4. `react-router-dom` untuk menambahkan fungsi routing dan navigasi pada web
5. `axios` sebagai http client
6. `@tanstack/react-query` untuk manajement server-side state dan optimisasi query
7. `zod` untuk validasi data
8. `react-super-seo` untuk optimisasi SEO web

## Struktur folder
1. `shared` berisi semua component dan utility class yang digunakan secara global
2. `pages` berisi daftar semua halaman dari website
3. `assets` berisi semua asset berupa gambar, icon dsb
