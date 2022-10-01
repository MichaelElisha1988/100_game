'use strict';

const modalR = document.querySelector('.modal-rules');
const modalS = document.querySelector('.modal-setting');
const btnCloseModalR = document.querySelector('.close-modal-rules');
const btnCloseModalS = document.querySelector('.close-modal-setting');
const overlay = document.querySelector('.overlay');

const btnsOpenModals = document.querySelectorAll('.show-modal');

const openModal = function () {
  let modal = this.textContent === 'Rules' ? modalR : modalS;
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  let modal = this.classList.contains('close-modal-rules') ? modalR : modalS;
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModals.forEach(function (btn, i) {
  btn.addEventListener('click', openModal);
});

btnCloseModalR.addEventListener('click', closeModal);
btnCloseModalS.addEventListener('click', closeModal);
