import pages from "../utils/router";

const App = () => {
  return (
    <>
      {pages.map(({ id, element: Element }) => {
        return <Element key={id} />;
      })}
    </>
  );
};

export default App;
