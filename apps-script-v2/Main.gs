const SPREADSHEET_ID = '1-fKl4-_MmqqHcWufQsRfA2Zv9fMIDgLoREVjdb2wDAQ';
const ADMIN_EMAILS = ['sutanad.suy@mahidol.ac.th','sutanad.suy@gmail.com','cocottons@gmail.com'];

function getAppSpreadsheet_() { return SpreadsheetApp.openById(SPREADSHEET_ID); }
function user_() { return (Session.getActiveUser().getEmail() || '').toLowerCase().trim(); }
function requireAdmin_() { if (!ADMIN_EMAILS.includes(user_())) throw new Error('ต้องเข้าสู่ระบบด้วยบัญชีที่ได้รับอนุญาต'); }
function json_(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }
function doGet() { return json_({ok:true,service:'Mahidol Sustainability Action Tracker API',spreadsheetId:SPREADSHEET_ID}); }
