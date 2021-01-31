import { truncate } from "../";

test("Whitespace truncate", () => {
  expect(truncate("    test")).toEqual("test");
  expect(truncate("test    ")).toEqual("test");
  expect(truncate("    test     ")).toEqual("test");
  expect(truncate("    two words     ")).toEqual("two words");
  expect(truncate("                ")).toEqual("");
});

test("Length truncate", () => {
  expect(truncate("123456789", 3)).toEqual("123");
  expect(truncate("123456789", 10)).toEqual("123456789");

  expect(truncate("    1234     ", 3)).toEqual("123");
  expect(truncate("    string with numbers 123     ", 10)).toEqual(
    "string wit"
  );
  expect(truncate("    string with numbers 123     ", 100)).toEqual(
    "string with numbers 123"
  );
});
