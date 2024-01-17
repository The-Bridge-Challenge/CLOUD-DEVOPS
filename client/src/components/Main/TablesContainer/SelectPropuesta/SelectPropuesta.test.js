import React from "react";
import { shallow } from "enzyme";
import SelectPropuesta from "./SelectPropuesta";

describe("SelectPropuesta", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SelectPropuesta />);
    expect(wrapper).toMatchSnapshot();
  });
});
