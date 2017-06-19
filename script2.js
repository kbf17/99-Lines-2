var friends = [
    'Daphne',
    'Fred',
    'Velma',
    'Shaggy',
    'Scooby'
];
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('sing');
    button.addEventListener('click', singSongs1);
});


function singSongs1() {
    for (var f = 0; f < friends.length; f++) {
        var friend = document.createElement('div');
        friend.className = 'friend';
        var friendTitle = document.createElement('h3');
        var friendName = document.createTextNode(friends[f]);
        friendTitle.appendChild (friendName);
        friend.appendChild (friendTitle);
        var singAlone = document.createElement('button');
        var buttonText = document.createTextNode('Sing it alone!')
        singAlone.appendChild (buttonText)
        friend.appendChild (singAlone);
        document.body.appendChild (friend);
        singAlone.addEventListener('click', function() {
            for ( var i = 99; i > 0; i--) {
                if (i > 2) {
                    var para = document.createElement('p');
                    var lineMany = document.createTextNode([i] + ' lines of code in the file ' + [i] + ' lines of code; ' + friendName + ' strikes one out, clears it all out ' + [(i-1)] + ' lines of code in the file');
                    para.appendChild (lineMany);
                } else if (i > 1) {
                    var para = document.createElement('p');
                    var lineOne = document.createTextNode([i] + ' lines of code in the file ' + [i] + ' lines of code; ' + friendName + ' strikes one out, clears it all out ' + [(i-1)] + ' line of code in the file');
                    para.appendChild (lineOne);
                } else if (i = 1) {
                    var para = document.createElement('p');
                    var lineZero = document.createTextNode([i] + ' line of code in the file ' + [i] + ' line of code; ' + friendName + ' strikes one out, clears it all out, no more lines of code in the file.');
                    para.appendChild (lineZero);
                }
            } friend.appendChild (para);
        })
}};
