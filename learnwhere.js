let body = JSON.parse($response.body);
let url = $request.url;

data_body.collins_vip.type = "vip";
data_body.collins_vip.expire_timestamp = 11461492800000;
data_body.collins_vip.expire_date = "2333-03-15";

data_body.wordroot_vip.type = "vip";
data_body.wordroot_vip.expire_timestamp = 11461492800000;
data_body.wordroot_vip.expire_date = "2333-03-15";

data_body.yanzhibao_vip.type = "vip"; 
data_body.yanzhibao_vip.expire_timestamp = 11461492800000;
data_body.yanzhibao_vip.expire_date = "2333-03-15";

data_body.wordderive_vip.type = "vip";
data_body.wordderive_vip.expire_timestamp = 11461492800000;
data_body.wordderive_vip.expire_date = "2333-03-15";

$done({ body: JSON.stringify(body) });