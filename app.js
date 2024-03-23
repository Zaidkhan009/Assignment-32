var current_users = ['usama', 'Azeem', 'Bisma', 'Siddique', 'admin'];
var new_users = ["admin", "azeem", "Huzaifa", "Khizer", "Aliza"];
var current_user_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_user_lower.includes(new_user.toLowerCase())) {
        console.log("sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("yes ".concat(new_user, ", is still available in list"));
    }
}
