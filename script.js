/* Bully's Pub & Grill — site behaviour */
(function () {
  'use strict';

  /* ---- mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- shrink header on scroll ---- */
  var header = document.querySelector('.site-header');
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle('is-stuck', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- scroll reveal ---- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- menu filters ---- */
  var filters = document.querySelectorAll('.menu-filters button');
  var blocks = document.querySelectorAll('.menu-block');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var want = btn.dataset.filter;
      filters.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      blocks.forEach(function (block) {
        var cat = block.dataset.cat;
        var show = want === 'all' || cat === want || cat === 'all';
        block.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---- hero video: honour reduced motion + autoplay fallback ---- */
  var video = document.querySelector('.hero__video');
  if (video) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) {
      video.removeAttribute('autoplay');
      video.pause();
    } else {
      var play = video.play();
      if (play && typeof play.catch === 'function') {
        play.catch(function () { /* poster image remains visible */ });
      }
    }
    video.addEventListener('error', function () { video.style.display = 'none'; });
  }

  /* ---- footer year ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
