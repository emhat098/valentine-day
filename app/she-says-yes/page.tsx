import Link from "next/link";

const SheSaysYes = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      <h1 className={"text-3xl text-center text-red-400 font-mono"}>
        Thank you.
      </h1>

      <div className={"flex flex-col gap-2 items-center"}>
        <iframe
          src="https://giphy.com/embed/R6gvnAxj2ISzJdbA63"
          width="360 "
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <h2
          className={"text-center text-2xl font-mono"}
        >{`Wait! Don't go yet!`}</h2>
        <Link
          href={"/click-me-now"}
          className={
            "btn btn-lg min-w-10 py-3 px-6 rounded-lg bg-red-300 text-red-800 hover:bg-red-700 hover:text-white"
          }
        >
          Click me now {`<3`}
        </Link>
      </div>
    </div>
  );
};

export default SheSaysYes;
