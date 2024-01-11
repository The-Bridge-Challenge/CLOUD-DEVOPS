import React from "react";
import { shallow } from "enzyme";
import TablesContainer from "./TablesContainer";

describe("TablesContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TablesContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
