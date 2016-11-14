import { caseOf } from 'elm-architecture';
import { createElement as h } from 'react';
const { assign } = Object;

function getTime() {
  return (new Date()).getTime();
}

export const main = {
  init: init(),
  update,
  subscriptions,
  view
};


// MODEL
function init() {
  return getTime();
}


// MSG
function Tick(time) {
  assign(this, { time });
}


// UPDATE
function update(msg, model) {
  return caseOf(msg,
    Tick, ({ time }) =>
      time
  );
}


// SUBSCRIPTIONS
function subscriptions(d, model) {
  setInterval(
    () => d(new Tick(getTime())),
    1000
  );
}


// VIEW
function view(d) {
  return model =>
    h('p', null, (new Date(model)).toLocaleString());
}
