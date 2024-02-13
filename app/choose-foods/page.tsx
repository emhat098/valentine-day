import Foods from "./components/Foods";

const SheSaysYes = () => {
  return (
    <div className={"flex flex-col gap-4 items-center font-light"}>
      <h1 className={"text-3xl text-center text-red-400 font-mono"}>
        {`What food would you like to eat?`}
      </h1>
      <Foods />
    </div>
  );
};

export default SheSaysYes;
