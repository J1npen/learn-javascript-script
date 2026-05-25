let body = JSON.parse($response.body);
let url = $request.url;

if (/\/user\/me/.test(url)) {
  body.picture = "https://api.dicebear.com/9.x/open-peeps/svg?seed=Sara";
  body.phone_number = "俺不告诉你";

} else if (/\/vip\/info/.test(url)) {
  body.data.expire = "2333-03-15T15:00:00+08:00";
  body.data.vipItem.expire = "2333-03-15T15:00:00+08:00";

} else if (/area_accessible/.test(url)) {
  body.countryCode = "TW";
  body.ip = "8.8.8.8";
  body.accessible = "true";
}

$done({ body: JSON.stringify(body) });