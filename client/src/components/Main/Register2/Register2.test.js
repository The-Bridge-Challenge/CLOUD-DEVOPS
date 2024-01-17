import React from "react";
import { shallow } from "enzyme";
import Register2 from "./Register2";

describe("Register2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Register2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
