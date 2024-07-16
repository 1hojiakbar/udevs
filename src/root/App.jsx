import { Drawer, FloatButton } from "antd";
import pages from "../utils/router";
import { MoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ContactInput } from "../pages/Contact/style";
import { TitleWrapper } from "../pages/Clients/style";
import { Element } from "react-scroll";
import { BreakpointProvider } from "../context/BreakpointContext";

const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <BreakpointProvider>
      {pages.map(({ id, element: Section, path }) => {
        return (
          <Element name={path} key={id}>
            <Section />
          </Element>
        );
      })}

      <FloatButton
        type="primary"
        size="large"
        onClick={() => showDrawer()}
        style={{
          bottom: 75,
          right: 50,
        }}
        icon={<MoreOutlined />}
      />
      <Drawer title="Udevs" onClose={onClose} open={open}>
        <TitleWrapper style={{ margin: "12px 0" }}>Welcome</TitleWrapper>
        <ContactInput placeholder="Введите сообщение…" />
      </Drawer>
    </BreakpointProvider>
  );
};

export default App;
