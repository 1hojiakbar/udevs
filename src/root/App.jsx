import { Drawer, FloatButton } from "antd";
import pages from "../utils/router";
import { MoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ContactInput } from "../pages/Contact/style";
import { TitleWrapper } from "../pages/Clients/style";

const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {pages.map(({ id, element: Element }) => {
        return <Element key={id} />;
      })}
      <FloatButton
        type="primary"
        onClick={() => showDrawer()}
        style={{
          right: 44,
        }}
        icon={<MoreOutlined />}
      />
      <Drawer title="Udevs" onClose={onClose} open={open}>
        <TitleWrapper style={{ margin: "12px 0" }}>Welcome</TitleWrapper>
        <ContactInput placeholder="Введите сообщение…" />
      </Drawer>
    </>
  );
};

export default App;
