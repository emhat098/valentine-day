import Date from "./components/Date";

const SheSaysYes = () => {
  return (
    <div className={"flex flex-col gap-4 items-center font-light"}>
      <h1 className={"text-3xl text-center text-red-400 font-mono"}>
        {`Do you have time tomorrow or any other day when you're free? ...`}
      </h1>
      <h2 className={"text-red-400"}>(select a date)</h2>
      <Date />
    </div>
  );
};

export default SheSaysYes;
