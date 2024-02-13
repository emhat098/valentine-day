"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Date = () => {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const date = formData.get("date");
    const data = {
      name: "date",
      value: date,
    };
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result) {
      setPending(false);
      router.push("/choose-foods");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className={"flex flex-row gap-2 items-center"}>
        <p>Which day</p>
        <input
          type={"date"}
          name={"date"}
          className={"border rounded-lg p-2"}
          required
        />
        <button
          type={"submit"}
          disabled={pending}
          className={"py-2 px-6 bg-red-300 rounded-lg hover:bg-red-500"}
        >
          {pending ? "Loading ..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Date;
