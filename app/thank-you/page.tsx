const Thankyou = () => {
  return (
    <div className={"flex flex-col gap-4 items-center font-light"}>
      <h1 className={"text-3xl font-medium text-center text-red-400 font-mono"}>
        {`Thank you for being my girlfriend!!!`}
      </h1>
      <h2 className={"text-1xl text-center text-red-400 font-mono"}>
        {`See you later. <3`}
      </h2>
      <iframe
        src="https://giphy.com/embed/9O0N8wt23OtOTzVn2m"
        width="360"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Thankyou;
