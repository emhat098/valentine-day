/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const foodData = [
  {
    id: 1,
    name: "Pho",
    image:
      "https://www.allrecipes.com/thmb/SZjdgaXhmkrRNLoOvdxuAktwk3E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228443-authentic-pho-DDMFS-4x3-0523f6531ccf4dbeb4b5bde52e007b1e.jpg",
  },
  {
    id: 2,
    name: "Hu Tieu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq6qqn__k4ghgBYfJgqTapI5ekY6VTEV8vqIfvMUGBA&s",
  },
  {
    id: 3,
    name: "Bun Rieu",
    image:
      "https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/1527485587348-MLMZ49RXNS4APVG18KAW/Vietnamese+Pork+%26+Seafood+Noodle+Soup+Bun+Rieu+Vicky+Pham+recipe",
  },
  {
    id: 4,
    name: "Bun Bo",
    image:
      "https://cdn.tgdd.vn/Files/2018/04/01/1078873/nau-bun-bo-hue-cuc-de-tai-nha-tu-vien-gia-vi-co-san-202109161718049940.jpg",
  },
  {
    id: 5,
    name: "Thit nuong",
    image:
      "https://static.vinwonders.com/production/thit-nuong-hoi-an-banner.jpg",
  },
  {
    id: 6,
    name: "Bun dau mam tom",
    image: "https://static.vinwonders.com/2023/01/bun-dau-mam-tom-01.jpg",
  },
  {
    id: 7,
    name: "Fast food",
    image: "https://static.vinwonders.com/production/ga-ran-nha-trang-1.jpg",
  },
  {
    id: 8,
    name: "Thai food",
    image:
      "https://ipos.vn/wp-content/uploads/2022/09/Thiet-ke-chua-co-ten-15.png",
  },
  {
    id: 9,
    name: "Lao food",
    image:
      "https://images.squarespace-cdn.com/content/v1/61061bcca9b496204219ae67/932ea0e4-eed5-4f0c-9926-6866368bd673/IMG_8339.jpg",
  },
];

const Foods = () => {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const foods = formData.getAll("food");
    const note = formData.get("note");
    const data = {
      name: "foods",
      value: {
        foods,
        note,
      },
    };
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result) {
      setPending(false);
      router.push("/choose-dessert");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <form onSubmit={handleOnSubmit} className={"flex flex-col gap-2"}>
      <div
        className={
          "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-2"
        }
      >
        {foodData.map((item) => (
          <label htmlFor={"food-" + item.id} key={item.id}>
            <div className="border rounded-lg p-2">
              <img
                src={item.image}
                alt={item.name}
                className={"min-h-10 h-20 w-full object-cover"}
              />
              <div className="flex flex-row gap-2">
                <p className={"font-mono"}>{item.id}</p>
                <h2 className="font-medium">{item.name}</h2>
              </div>
              <input
                type="checkbox"
                id={"food-" + item.id}
                name={"food"}
                value={item.name}
              />
            </div>
          </label>
        ))}
        <div className="col-span-2 border shadow p-2">
          <h3>Or you can add something you like here.</h3>
          <textarea
            name={"note"}
            rows={5}
            className={"border rounded-lg border-slate-500 p-2 text-sm w-full"}
          ></textarea>
        </div>
      </div>
      <button
        type={"submit"}
        disabled={pending}
        className={"py-2 px-6 bg-red-300 rounded-lg hover:bg-red-500 w-max"}
      >
        {pending ? "Loading ..." : "Submit"}
      </button>
    </form>
  );
};

export default Foods;
