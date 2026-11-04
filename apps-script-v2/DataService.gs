function rows_(name) {
  const sheet = getAppSpreadsheet_().getSheetByName(name);
  if (!sheet) throw new Error('ไม่พบชีต ' + name);
  const values = sheet.getDataRange().getValues();
  const headers = values.shift() || [];
  return values.filter(row => row.some(value => value !== '')).map(row => Object.fromEntries(headers.map((h,i) => [String(h), row[i] ?? ''])));
}
function bootstrap_(fiscalYear) {
  const year = Number(fiscalYear || new Date().getFullYear() + 543);
  return {fiscalYear:year, budgets:rows_('Master_Budgets').filter(r=>Number(r.Fiscal_Year)===year), departments:rows_('Master_Departments'), projects:rows_('Master_Projects').filter(r=>Number(r.Fiscal_Year)===year), plans:rows_('Plans'), reports:rows_('Reports'), expenses:rows_('Expenses'), attachments:rows_('Attachments')};
}
function append_(sheetName, object) {
  const sheet = getAppSpreadsheet_().getSheetByName(sheetName);
  if (!sheet) throw new Error('ไม่พบชีต ' + sheetName);
  const headers = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0];
  sheet.appendRow(headers.map(header => object[header] ?? ''));
}
function createProject_(p) {
  const id = p.project_id || Utilities.getUuid();
  append_('Master_Projects',{Project_ID:id,Fiscal_Year:p.fiscal_year,Project_Name:p.project_name,Department:p.department,Budget_Allocated:p.budget_allocated,Responsible_Person:p.responsible_person,Primary_Email:p.primary_email,Start_Date:p.start_date,End_Date:p.end_date,Status:'active'});
  return {project_id:id};
}
function savePlan_(p) { const id=p.plan_id||Utilities.getUuid(); append_('Plans',{plan_id:id,project_id:p.project_id,baseline_start:p.baseline_start,baseline_end:p.baseline_end,objective:p.objective,indicator:p.indicator,target:p.target,sdg_ids:(p.sdg_ids||[]).join(','),procurement_plan:JSON.stringify(p.procurement_plan||[]),updated_at:new Date()}); return {plan_id:id}; }
function saveReport_(p) { const id=p.report_id||Utilities.getUuid(); append_('Reports',{report_id:id,project_id:p.project_id,month:p.month,version:p.version||1,summary:p.summary,progress_actual:p.progress_actual,indicator_actual:p.indicator_actual,delay:p.delay,sdg_outcome:p.sdg_outcome,submitted_by:user_(),submitted_at:new Date(),updated_at:new Date()}); return {report_id:id}; }
