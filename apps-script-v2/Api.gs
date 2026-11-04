function doPost(e) {
  try {
    const request = JSON.parse(e.postData.contents || '{}');
    const action = String(request.action || '');
    const p = request.payload || {};
    let data;
    if (['createProject','savePlan','saveReport','uploadMetadata'].includes(action)) requireAdmin_();
    switch (action) {
      case 'health': data = {service:'ok',user:user_()}; break;
      case 'bootstrap': data = bootstrap_(p.fiscalYear); break;
      case 'createProject': data = createProject_(p); break;
      case 'savePlan': data = savePlan_(p); break;
      case 'saveReport': data = saveReport_(p); break;
      default: throw new Error('ไม่รู้จัก action: ' + action);
    }
    return json_({ok:true,action,data});
  } catch (error) { return json_({ok:false,error:String(error.message || error)}); }
}
