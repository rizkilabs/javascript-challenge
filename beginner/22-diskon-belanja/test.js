const test = require("node:test");
const assert = require("node:assert");
const { hitungDiskon } = require("./index");

test("di bawah 100.000 tidak dapat diskon", () => {
  assert.deepStrictEqual(hitungDiskon(50000), {
    persenDiskon: 0,
    nominalDiskon: 0,
    totalAkhir: 50000,
  });
  assert.strictEqual(hitungDiskon(99999).persenDiskon, 0);
});

test("tepat 100.000 dapat diskon 10%", () => {
  assert.deepStrictEqual(hitungDiskon(100000), {
    persenDiskon: 10,
    nominalDiskon: 10000,
    totalAkhir: 90000,
  });
});

test("antara 100.000 dan 199.999 dapat diskon 10%", () => {
  assert.deepStrictEqual(hitungDiskon(150000), {
    persenDiskon: 10,
    nominalDiskon: 15000,
    totalAkhir: 135000,
  });
  assert.strictEqual(hitungDiskon(199999).persenDiskon, 10);
});

test("tepat 200.000 dapat diskon 20%", () => {
  assert.deepStrictEqual(hitungDiskon(200000), {
    persenDiskon: 20,
    nominalDiskon: 40000,
    totalAkhir: 160000,
  });
});

test("di atas 200.000 dapat diskon 20%", () => {
  assert.deepStrictEqual(hitungDiskon(250000), {
    persenDiskon: 20,
    nominalDiskon: 50000,
    totalAkhir: 200000,
  });
});
