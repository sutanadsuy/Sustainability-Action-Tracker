const DRIVE_FOLDERS = {
  reportUpload: '1BWBtxHy_r5TZmEA544ck_Upp4xUuCpw4',
  projectImage: '1PBleLIkrK6aVeF4qTRNd12-8NAg8av2s',
  overviewImage: '1bKYLQbvxOgzii9NJ2h_-jCrA0sbBD-G3',
  pdfReport: '1KbvuUODl0mevjxDf7aNXhd7Mj3ThbYDo'
};

function uploadFile_(p) {
  if (!p || !p.base64) throw new Error('ไม่พบข้อมูลไฟล์');
  const folder = DriveApp.getFolderById(DRIVE_FOLDERS[p.folderKey || 'reportUpload']);
  const bytes = Utilities.base64Decode(String(p.base64).replace(/^data:[^;]+;base64,/, ''));
  const blob = Utilities.newBlob(bytes, p.mimeType || 'application/octet-stream', p.fileName || 'report-file');
  const file = folder.createFile(blob);
  const id = Utilities.getUuid();
  append_('File_Attachments', {File_ID:id,Reference_ID:p.referenceId || '',Fiscal_Year:p.fiscalYear || '',Month_Year:p.month || '',File_Type:p.fileType || 'report',File_Name:file.getName(),Original_URL:file.getUrl(),Uploaded_At:new Date(),Uploaded_By:user_(),Status:'active'});
  append_('Attachments', {attachment_id:id,report_id:p.reportId || '',project_id:p.projectId || '',file_name:file.getName(),drive_file_id:file.getId(),mime_type:file.getMimeType(),caption:p.caption || '',featured:p.featured ? 'TRUE' : 'FALSE',uploaded_by:user_(),uploaded_at:new Date()});
  return {fileId:file.getId(),fileName:file.getName(),url:file.getUrl(),attachmentId:id};
}
