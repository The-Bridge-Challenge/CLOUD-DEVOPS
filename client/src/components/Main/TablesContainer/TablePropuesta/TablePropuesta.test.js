import React from "react";
import { shallow } from "enzyme";
import TablePropuesta from "./TablePropuesta";

describe("TablePropuesta", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TablePropuesta />);
    expect(wrapper).toMatchSnapshot();
  });
});
