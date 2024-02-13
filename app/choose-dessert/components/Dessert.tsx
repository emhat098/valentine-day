/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const dessertData = [
  {
    id: 1,
    name: "Milk tea",
    image:
      "https://assets.epicurious.com/photos/629f98926e3960ec24778116/3:2/w_6819,h_4546,c_limit/BubbleTea_RECIPE_052522_34811.jpg",
  },
  {
    id: 2,
    name: "Mochi",
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2023/06/vegan-strawberry-mochi-ice-cream-1.jpg",
  },
  {
    id: 3,
    name: "Fruit cake",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/cheesecake-cupcakes-1649185920.jpg",
  },
  {
    id: 4,
    name: "Yaourt",
    image:
      "https://assets.afcdn.com/recipe/20190805/96015_w1024h1024c1cx1852cy3578cxt0cyt0cxb3648cyb5472.jpg",
  },
  {
    id: 5,
    name: "Ice cream",
    image:
      "https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg",
  },
  {
    id: 6,
    name: "Rau cau",
    image:
      "https://www.huongnghiepaau.com/wp-content/uploads/2019/03/flan-rau-cau-beo-thom-1.jpg",
  },
  {
    id: 7,
    name: "Fruit",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps31674_SD1115455D52A-3.jpg",
  },
];

const Dessert = () => {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const foods = formData.getAll("dessert");
    const note = formData.get("note");
    const data = {
      name: "dessert",
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
      router.push("/choose-place");
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
        {dessertData.map((item) => (
          <label htmlFor={"dessert-" + item.id} key={item.id}>
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
                id={"dessert-" + item.id}
                name={"dessert"}
                value={item.name}
              />
            </div>
          </label>
        ))}
        <div className="col-span-2 border shadow p-2">
          <h3>
            Or you can add something you like here. It is gonna be to serve.
          </h3>
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

export default Dessert;
