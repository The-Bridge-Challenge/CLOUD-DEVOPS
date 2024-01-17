import React from "react";
import { shallow } from "enzyme";
import TableInputFactura from "./TableInputFactura";

describe("TableInputFactura", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TableInputFactura />);
    expect(wrapper).toMatchSnapshot();
  });
});
