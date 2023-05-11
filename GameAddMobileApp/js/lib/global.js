function btnShow_click() {
    showPositionAndMap();
}
function init() {
    $("#btnShow").on("click", btnShow_click);
}

$(document).ready(function () {
    init();
});
