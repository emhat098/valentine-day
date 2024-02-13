import Link from "next/link";

const Wubmv = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      <h1 className={"text-3xl text-center text-red-400 font-mono"}>
        Will you be my valentine?{" "}
        <strong className={"text-red-500"}>Babe !</strong>
      </h1>
      <div className="flex flex-row justify-center gap-4">
        <Link
          href={"/she-says-yes"}
          className={
            "btn btn-lg min-w-10 py-3 px-6 rounded-lg bg-red-300 text-red-800 hover:bg-red-700 hover:text-white"
          }
        >
          Yes
        </Link>
        <button
          className={
            "btn btn-lg min-w-10 py-3 px-6 rounded-lg bg-red-300 text-red-800 hover:opacity-0 hover:hidden"
          }
        >
          NO
        </button>
      </div>
      <div className="flex justify-center">
        <iframe
          src="https://giphy.com/embed/I1nwVpCaB4k36"
          width="360"
          height="476"
          frameBorder="0"
          className="absolute"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Wubmv;
