/** Secure API bridge for the GitHub Pages frontend. */
function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const action = String(body.action || '').trim();
    const p = body.payload || {};
    const readOnly = ['bootstrap', 'masterLists', 'dashboard', 'matrix', 'monthlyContext', 'admin', 'budgetDocs'].includes(action);
    if (!readOnly) requireAdminAccess_();
    let data;
    switch (action) {
      case 'bootstrap': data = getInitialBootstrapData(p.fiscalYear); break;
      case 'masterLists': data = getMasterLists(p.fiscalYear); break;
      case 'dashboard': data = getDashboardReportJson(p.fiscalYear, p.dept || '', p.refId || '', p.asOfMonthKey || ''); break;
      case 'matrix': data = getProjectYearlyMatrix(p.fiscalYear, p.refId || ''); break;
      case 'monthlyContext': data = getProjectMonthlyContext(p.fiscalYear, p.actualYear, p.refId || '', p.currentMonth || ''); break;
      case 'admin': data = getAdminCenterData(p.fiscalYear); break;
      case 'budgetDocs': data = getMasterBudgetDocs(p.fiscalYear); break;
      case 'savePlan': data = saveAnnualPlan(p.payloadList || [], p.projectTimeline || {}, p.masterProcureItems || [], p.savingsReason || '', p.sdgAlignments || []); break;
      case 'submitMonthlyActual': data = submitMonthlyActual(p.payload || {}, p.expenseItems || [], p.generalFiles || []); break;
      default: throw new Error('Unknown action: ' + action);
    }
    return apiJson_({ok: true, action: action, data: data, user: checkAdminAccess()});
  } catch (err) {
    return apiJson_({ok: false, error: err && err.message ? err.message : String(err)});
  }
}

function apiJson_(value) {
  return ContentService.createTextOutput(JSON.stringify(value, function(_, v) {
    return v === undefined ? null : v;
  })).setMimeType(ContentService.MimeType.JSON);
}
