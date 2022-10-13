"use strict";

const newArr = Array.from(document.querySelectorAll(".image-box"));

const handleFilter = function (className) {
  newArr.forEach((e) => e.classList.remove("hidden"));
  const newEl = newArr.filter((el) => !el.classList.contains(className));
  if (!newEl) return;
  newEl.forEach((e) => e.classList.add("hidden"));
};

const filterAll = function () {
  newArr.forEach((e) => e.classList.remove("hidden"));
};

const handleFilter1 = function () {
  handleFilter("box-1");
};

const handleFilter2 = function () {
  handleFilter("box-2");
};

const handleFilter3 = function () {
  handleFilter("box-3");
};
