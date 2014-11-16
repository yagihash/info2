function loc_print(pos) {
    alert("緯度: " + pos.coords.latitude + ", 経度: " + pos.coords.longitude);
}

function loc_error(err) {
    if (err.code == err.POSITION_UNAVAILABLE) {
	console.log("位置情報の取得ができませんでした。");
    } else if (err.code == err.PERMISSION_DENIED) {
	console.log("位置情報取得の使用許可がされませんでした。");
    } else if (err.code == err.PERMISSION_DENIED_TIMEOUT) {
	console.log("位置情報取得中にタイムアウトしました。");
    }
}

navigator.geolocation.getCurrentPosition(loc_print, loc_error);
alert("位置取得中");
