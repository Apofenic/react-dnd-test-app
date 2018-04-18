
let cardPositionOnBody = [1, 7];
let cardObserver = null;

function emitCardChange() {
  cardObserver(cardPositionOnBody);
}

export function observeCard(o) {
  if (cardObserver) {
    throw new Error('Multiple observers not implemented.');
  }
  cardObserver = o;
  emitCardChange();
}

export function moveCard(toX, toY) {
  cardPositionOnBody = [toX, toY];
  emitCardChange();
}

