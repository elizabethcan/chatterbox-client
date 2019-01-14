var Friends = {
  toggleStatus: function(friendName) {
    if (!!friendList[friendName]) {
      friendList[friendName] = false;
    } else {
      friendList[friendName] = true;
    }
    console.log(friendName);
  }

};