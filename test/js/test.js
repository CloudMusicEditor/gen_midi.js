(function () {
////////

var testCases = [
    {
        name: "Test 1",
        code: function () {
            return true;
        }
    }
];

function runTests() {
    var out = $('#results');
    out.html('');
    for (var i = 0; i < testCases.length; i+=1) {
        handleTestCase(out, testCases[i]);
    }
}

function handleTestCase(out, aCase) {
    var disp = $('<div />');
    out.append(disp);
    disp.append($('<span>Running "'+aCase.name+'"...</span>'));
    disp.append(" ");

    var result = aCase.code();
    if (result) {
        disp.append($('<span class="success">Good!</span>'));
    }
    else {
        disp.append($('<span class="fail">Fail!</span>'));
    }

}

$(function() {
    $('#runtests').click(runTests);
});


////////
}());
