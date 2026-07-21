(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("burger");
  var navMobile = document.getElementById("navMobile");
  if (burger && navMobile) {
    burger.addEventListener("click", function () {
      var open = navMobile.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navMobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navMobile.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Live ledger simulation ---------- */
  var ledger = document.getElementById("ledgerRows");
  if (!ledger) return;

  var merchants = [
    "WIRE — INTL SETTLEMENT", "POS — RETAIL, CHICAGO", "ACH — PAYROLL BATCH",
    "CARD — ONLINE, LAGOS", "CLAIM — AUTO, PHASE 2", "POS — ELECTRONICS, MIAMI",
    "CARD — ATM WITHDRAWAL", "CLAIM — PROPERTY, FNOL", "WIRE — VENDOR PAYMENT",
    "CARD — SUBSCRIPTION", "ACH — TRANSFER, EXT.", "POS — GROCERY, DENVER",
    "CARD — TRAVEL BOOKING", "CLAIM — HEALTH, RX", "WIRE — NEW BENEFICIARY"
  ];

  function randomAmount() {
    var n = Math.random() * 9000 + 20;
    return "$" + n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  function randomTime() {
    var h = Math.floor(Math.random() * 12) + 1;
    var m = Math.floor(Math.random() * 60);
    return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
  }

  var MAX_ROWS = 8;

  function addRow() {
    var row = document.createElement("div");
    var isFlag = Math.random() < 0.16;
    row.className = "ledger__row" + (isFlag ? " flag" : "");
    row.innerHTML =
      '<span class="t">' + randomTime() + '</span>' +
      '<span class="m">' + merchants[Math.floor(Math.random() * merchants.length)] + '</span>' +
      '<span class="amt">' + randomAmount() + '</span>';

    ledger.appendChild(row);

    while (ledger.children.length > MAX_ROWS) {
      ledger.removeChild(ledger.firstChild);
    }

    ledger.scrollTop = ledger.scrollHeight;
  }

  // seed initial rows
  for (var i = 0; i < MAX_ROWS; i++) addRow();

  if (!reduceMotion) {
    setInterval(addRow, 1400);
  }
})();
