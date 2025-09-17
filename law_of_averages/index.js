const REVENUE_PER_BOOKED = 149;

const counters = {
  scores: 0,
  pitches: 0,
  booked: 0,
};

const scoreBreakdown = {
  qualified: 0,
  nq: 0,
};

const counterElements = {
  scores: document.querySelector('[data-counter="scores"]'),
  pitches: document.querySelector('[data-counter="pitches"]'),
  booked: document.querySelector('[data-counter="booked"]'),
};

const displayElements = {
  scores: counterElements.scores?.querySelector('.counter__display') ?? null,
  pitches: counterElements.pitches?.querySelector('.counter__display') ?? null,
  booked: counterElements.booked?.querySelector('.counter__display') ?? null,
};

const breakdownElements = {
  qualified: counterElements.scores?.querySelector('[data-score="qualified"] .breakdown-value') ?? null,
  nq: counterElements.scores?.querySelector('[data-score="nq"] .breakdown-value') ?? null,
};

const ratioElement = document.getElementById('ratioValue');
const revenueElement = document.getElementById('revenueValue');
const resetButton = document.getElementById('resetBtn');
const scorePrompt = document.getElementById('scorePrompt');

function renderCounter(key) {
  if (!displayElements[key]) {
    return;
  }
  displayElements[key].textContent = counters[key];
}

function renderScoreBreakdown() {
  if (breakdownElements.qualified) {
    breakdownElements.qualified.textCont