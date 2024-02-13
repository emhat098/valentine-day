import Dessert from "./components/Dessert";

const SheSaysYes = () => {
  return (
    <div className={"flex flex-col gap-4 items-center font-light"}>
      <h1 className={"text-3xl text-center text-red-400 font-mono"}>
        {`And one more thing, which dessert are we eating together?`}
      </h1>
      <Dessert />
    </div>
  );
};

export default SheSaysYes;
