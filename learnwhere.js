let body = JSON.parse($response.body);
let url = $request.url;

body.data_body.collins_vip.type = "vip";
body.data_body.collins_vip.expire_timestamp = 1781015018000;
body.data_body.collins_vip.expire_date = "2026-06-09";

body.data_body.wordroot_vip.type = "vip";
body.data_body.wordroot_vip.expire_timestamp = 1781015018000;
body.data_body.wordroot_vip.expire_date = "2026-06-09";

body.data_body.yanzhibao_vip.type = "vip"; 
body.data_body.yanzhibao_vip.expire_timestamp = 1781015018000;
body.data_body.yanzhibao_vip.expire_date = "2026-06-09";

body.data_body.wordderive_vip.type = "vip";
body.data_body.wordderive_vip.expire_timestamp = 1781015018000;
body.data_body.wordderive_vip.expire_date = "2026-06-09";

$done({ body: JSON.stringify(body) });