# Mahidol Sustainability Action Tracker

ชุดนี้เป็นโปรเจกต์สำหรับใช้งานจริง แยกจากเว็บ mockup เดิม

## ส่วนประกอบ

- `apps-script/` — backend และหน้า Web App ที่บันทึกข้อมูลจริงลง Google Sheets และอัปโหลดไฟล์เข้า Google Drive
- `index.html`, `starter.js`, `starter.css`, `styles.css` — หน้าเว็บหลักสำหรับเผยแพร่ผ่าน GitHub Pages
- ไฟล์ข้อมูลจริงอยู่ใน Google Sheets/Google Drive ไม่เก็บข้อมูลผู้ใช้งานไว้ใน Git

## แหล่งข้อมูลจริง

- Google Sheet: `1-fKl4-_MmqqHcWufQsRfA2Zv9fMIDgLoREVjdb2wDAQ`
- Google Drive folder: https://drive.google.com/drive/folders/11LM9scBe3QRE-sXhW2-Ko8DwZEM-R7XD

## ติดตั้ง Web App

1. เปิด Google Apps Script project
2. นำไฟล์ทุกไฟล์ใน `apps-script/` เข้าโปรเจกต์
3. ตรวจ `SPREADSHEET_ID` ใน `Main.gs`
4. Deploy → New deployment → Web app
5. ตั้ง Execute as เป็นเจ้าของโปรเจกต์ และกำหนดผู้ใช้งาน

GitHub Pages ใช้สำหรับหน้าเว็บ ส่วนการบันทึกและอัปโหลดใช้ Web App ของ Apps Script

## โครงสร้างเว็บ

หน้าเว็บเริ่มต้นคือ `index.html` และใช้ไฟล์ `starter.js`, `starter.css` และ `styles.css` เท่านั้น
