import React from "react";
import { shallow } from "enzyme";
import Register1 from "./Register1";

describe("Register1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Register1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
