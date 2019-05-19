var postUsage = function(url, data, target) {
    var $form = $('<form/>', {'action': url, 'method': 'post', 'target': target});
    for(var key in data) {
        $form.append($('<input/>', {'type': 'hidden', 'name': key, 'value': data[key]}));
    }
    $form.appendTo(document.body);
    $form.submit();
};
function request(url, p0, p1, p2) {
    var data = {'sessionId': p0, 'memberId': p1, 'contract': p2};
    postUsage(url, data, '_blank');
}
