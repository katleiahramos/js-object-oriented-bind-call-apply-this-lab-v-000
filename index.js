//ƒ (){ return {thisValue: this, arguments: Array.from(arguments)} }
function justInvoke(fn) {
  return fn();
};

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

