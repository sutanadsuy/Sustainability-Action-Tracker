# Apps Script v2 — Backend สำหรับ GitHub Pages

โฟลเดอร์นี้เป็นชุด Apps Script สำหรับใช้เป็น Backend ของหน้าเว็บ GitHub Pages
ไม่ใช่ชุดหน้าเว็บ Apps Script แบบ legacy และไม่ต้องนำไฟล์จาก `apps-script-legacy-2026-11-04` มาปน

## ไฟล์ที่ต้องนำเข้า Apps Script project

- `Main.gs` — จุดเริ่มต้น Web App, Spreadsheet ID และการตรวจสอบผู้ใช้
- `Api.gs` — รับคำขอจาก GitHub Pages ผ่าน `doGet`/`doPost`
- `DataService.gs` — อ่านและเขียนข้อมูลโครงการ แผน รายงาน และไฟล์แนบใน Google Sheets
- `DriveService.gs` — อัปโหลดไฟล์ไปยังโฟลเดอร์ Google Drive ที่กำหนด
- `appsscript.json` — manifest ของโปรเจกต์

ไม่ต้องนำไฟล์ `Index.html`, `Tab*.html` หรือ `Scripts*.html` จากชุด legacy มาใส่ในโปรเจกต์ v2
เพราะหน้าเว็บหลักอยู่ที่ GitHub Pages แล้ว

## แหล่งข้อมูล

- Spreadsheet ID: `1-fKl4-_MmqqHcWufQsRfA2Zv9fMIDgLoREVjdb2wDAQ`
- Google Drive folder: `11LM9scBe3QRE-sXhW2-Ko8DwZEM-R7XD`
