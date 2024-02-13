import connect from "@/db";
import Data from "@/models/Data";
import { notFound } from "next/navigation";

type PageParams = {
  params: {
    token: string;
  };
};

const getData = async () => {
  try {
    await connect();
    const data = await Data.find({});
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

const Me = async ({ params: { token } }: PageParams) => {
  if (token !== process.env.TOKEN) return notFound();
  const data = await getData();
  return (
    <div>
      {data.length > 0 &&
        data.map((item) => (
          <div key={item._id.toString()} className={"flex flex-col gap-2"}>
            <span>Name: {item.name}</span>
            <span className="text-wrap">
              Value: <pre>{JSON.stringify(item.value)}</pre>
            </span>
          </div>
        ))}
    </div>
  );
};

export default Me;
