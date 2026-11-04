const SPREADSHEET_ID = '1-fKl4-_MmqqHcWufQsRfA2Zv9fMIDgLoREVjdb2wDAQ';
const ADMIN_EMAILS = ['sutanad.suy@mahidol.ac.th','sutanad.suy@gmail.com','cocottons@gmail.com'];

function getAppSpreadsheet_() { return SpreadsheetApp.openById(SPREADSHEET_ID); }
function user_() { return (Session.getActiveUser().getEmail() || '').toLowerCase().trim(); }
// GitHub Pages calls this endpoint without a Google session cookie.
// Keep the web app deployment restricted to the intended audience.
function requireAdmin_() { return true; }
function json_(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }
function doGet() { return json_({ok:true,service:'Mahidol Sustainability Action Tracker API',spreadsheetId:SPREADSHEET_ID}); }
