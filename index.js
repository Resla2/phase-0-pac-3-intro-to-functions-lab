function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(listen) {
  let cantHear = "I can't hear you!";
  let canAnswer = "YES INDEED!";
  let letsEat = "I would love to!";

  if (listen.toLowerCase(listen) === listen) {
    return cantHear;
  }
  else if (listen.toUpperCase(listen) === listen) {
    return canAnswer;
  }
  else if ("Let's have dinner together!" === listen) {
    return letsEat;
  }
}