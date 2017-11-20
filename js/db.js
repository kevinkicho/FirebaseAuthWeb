
function firebaseLoadDataBtn() {
    var postText = document.getElementById('postText');
    var uid = "dbj84RGb8TXBnXTrIjyMYEfTep13";
    var refs = firebase.database().ref('user-posts/' + uid);

    //var a = snapshotToArray(snapshot).length;
    //window.alert(a);
    refs.once('value',function(snapshot){
        var a = snapshotToArray(snapshot).length;
        //window.alert(a);
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val().body;

        postText.innerHTML +="<li>"+childData+"</li>";
            });
    });
}

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
}