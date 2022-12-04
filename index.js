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
function sayHiToHeadphonedRoommate(hello) {
    let cantUnswer = "I can't hear you!";
    let yesUnswer = "YES INDEED!";
    let lovUnswer = "I would love to!";
    
    if (hello.toLowerCase(hello) === hello) {
      return cantUnswer;
    }
    else if (hello.toUpperCase(hello) === hello) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === hello) {
      return lovUnswer;
    }
  }