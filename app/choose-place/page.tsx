import Place from "./component/Place";

const ChoosePlace = () => {
  return (
    <div className={"flex flex-col gap-4 items-center font-light"}>
      <h1 className={"text-3xl text-center text-red-400 font-mono"}>
        {`Just one more moment. Shall we go somewhere else after dinner?`}
      </h1>
      <Place />
    </div>
  );
};

export default ChoosePlace;
