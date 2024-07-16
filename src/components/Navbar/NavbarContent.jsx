import { Select } from "antd";
const { Option } = Select;
import navbar from "../../utils/navbar";
import Button from "../Generic/Button/Button";
import { NavLinkItem, Section } from "./style";
import { Link } from "react-scroll";

const NavbarContent = () => {
  return (
    <Section gap="15px">
      {navbar.map((item) => {
        const { id, label, children, height, width, path, element } = item;
        if (element === "link") {
          return (
            <NavLinkItem
              to={path || "/"}
              key={id}
              smooth={item.smooth}
              duration={item.duration}
            >
              {label}
            </NavLinkItem>
          );
        } else {
          return (
            <Select
              key={id}
              defaultValue={label}
              dropdownStyle={{
                width,
                height,
              }}
              variant={false}
            >
              {children.map((section) => (
                <Option key={section.id}>
                  <Link
                    to={section.path}
                    smooth="true"
                    duration={600}
                    className="option"
                  >
                    {section.label}
                  </Link>
                </Option>
              ))}
            </Select>
          );
        }
      })}
      <Button
        w="112px"
        h="40px"
        size="small"
        minw="80px"
        maxw="160px"
        type="primary"
      >
        <Link to="/contact" smooth="true" duration={600}>
          Contact
        </Link>
      </Button>
    </Section>
  );
};

export default NavbarContent;
