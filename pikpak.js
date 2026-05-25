let body = JSON.parse($response.body);

body.picture = "https://api.dicebear.com/9.x/open-peeps/svg?seed=Sara";
body.data.expire = "2333-03-15T15:00:00+08:00";
body.data.vipItem.expire = "2333-03-15T15:00:00+08:00";

$done({ body: JSON.stringify(body) });