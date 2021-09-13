const { getGreeting, multiply } = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test("can multiply two numbers", () => {
  expect(multiply(8,9)).toBe(72);
});