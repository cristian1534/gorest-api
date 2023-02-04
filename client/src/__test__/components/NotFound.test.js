import React from "react";
import { mount } from "enzyme";
import NotFound from "../../components/NotFound";

describe("<NotFound/>", () => {
  test("NotFound: MUST HAVE IMAGE FOR USERS", () => {
    const lost = mount(<NotFound />);
    expect(lost.find("Container")).not.toBe(null);
  });
  test("NotFound: MUST HAVE MESSAGE FOR USERS", () => {
    const lost = mount(<NotFound/>)
    expect(lost.length).toEqual(1)
  })
});
