/* =========================================================
   Hackerspace Valencia · Open-doors schedule
   Computes the next open-doors Tuesday from a confirmed
   anchor session on a 14-day cadence and injects the date
   into every element marked with [data-opendoors].
   ========================================================= */
(function () {
  'use strict';

  // Confirmed open-doors session used as reference (Jul 7, 2026, a Tuesday)
  var ANCHOR = new Date(2026, 6, 7);
  var PERIOD_DAYS = 14; // biweekly

  function midnight(d) {
    var x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  }

  // Day number of the calendar date, ignoring hours, time zones and DST.
  // (Do not use millisecond differences: the DST switch makes a "day"
  // sometimes 23 or 25 hours long, which shifts sessions to the wrong date.)
  function dayNumber(d) {
    return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  }

  // Calendar arithmetic: keeps the wall-clock date even across DST changes.
  function addDays(d, days) {
    var x = midnight(d);
    x.setDate(x.getDate() + days);
    return x;
  }

  // Next open-doors date on/after `from` (inclusive: today if it is a session day)
  function nextSession(from) {
    var k = Math.ceil((dayNumber(from) - dayNumber(ANCHOR)) / PERIOD_DAYS);
    return addDays(ANCHOR, k * PERIOD_DAYS);
  }

  // The upcoming Tuesday (today if today is Tuesday)
  function upcomingTuesday(from) {
    var dow = from.getDay(); // 0 Sun .. 6 Sat
    var add = dow === 2 ? 0 : (9 - dow) % 7;
    return addDays(from, add);
  }

  function sameDay(a, b) {
    return midnight(a).getTime() === midnight(b).getTime();
  }

  function locale() {
    var l = (document.documentElement.lang || 'es').toLowerCase();
    return l.indexOf('en') === 0 ? 'en-GB' : 'es-ES';
  }

  function fmt(date) {
    var s = new Intl.DateTimeFormat(locale(), {
      weekday: 'long', day: 'numeric', month: 'long'
    }).format(date);
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function fmtShort(date) {
    return new Intl.DateTimeFormat(locale(), {
      day: 'numeric', month: 'short'
    }).format(date);
  }

  // YYYY-MM-DD in local calendar, for the <time> datetime attribute
  function isoDate(date) {
    var m = ('0' + (date.getMonth() + 1)).slice(-2);
    var d = ('0' + date.getDate()).slice(-2);
    return date.getFullYear() + '-' + m + '-' + d;
  }

  function isTodayOpen() {
    var now = new Date();
    if (!sameDay(now, nextSession(now))) return false;
    var end = new Date(now);
    end.setHours(20, 30, 0, 0); // session ends at 20:30
    return now <= end;
  }

  function init() {
    var now = new Date();
    var next = nextSession(now);
    var upTue = upcomingTuesday(now);
    var openThisTuesday = sameDay(next, upTue);

    var dict = {
      es: {
        nextPrefix: 'Próxima sesión:',
        openToday: 'Hoy abierto al público',
        openThisTue: function () { return 'Abierto al público este martes ' + fmtShort(next); },
        closedThisTue: function () { return 'Este martes no abrimos al público · próxima ' + fmtShort(next); },
        every: 'Martes alternos · 18:30 a 20:30'
      },
      en: {
        nextPrefix: 'Next session:',
        openToday: 'Open today to the public',
        openThisTue: function () { return 'Open to the public this Tuesday ' + fmtShort(next); },
        closedThisTue: function () { return 'No open doors this Tuesday · next ' + fmtShort(next); },
        every: 'Every other Tuesday · 6:30 to 8:30 PM'
      }
    };
    var L = (document.documentElement.lang || 'es').toLowerCase().indexOf('en') === 0 ? dict.en : dict.es;

    // Fill plain date elements
    document.querySelectorAll('[data-opendoors="date"]').forEach(function (el) {
      el.textContent = fmt(next);
      el.setAttribute('datetime', isoDate(next));
    });

    // Fill prefix + date combos
    document.querySelectorAll('[data-opendoors="next"]').forEach(function (el) {
      el.textContent = L.nextPrefix + ' ' + fmt(next);
    });

    // Status badges
    document.querySelectorAll('[data-opendoors="badge"]').forEach(function (el) {
      el.classList.remove('d-none');
      if (isTodayOpen()) {
        el.textContent = L.openToday;
        el.classList.add('od-badge--live');
      } else if (openThisTuesday) {
        el.textContent = L.openThisTue();
        el.classList.add('od-badge--soon');
      } else {
        el.textContent = L.closedThisTue();
        el.classList.add('od-badge--soon');
      }
    });

    // Recurring text
    document.querySelectorAll('[data-opendoors="every"]').forEach(function (el) {
      el.textContent = L.every;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
