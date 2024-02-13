/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const placeData = [
  {
    id: 1,
    name: "Cinema",
    image:
      "https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg?cs=srgb&dl=pexels-clem-onojeghuo-375885.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "Park",
    image:
      "https://media.istockphoto.com/id/498886379/photo/beautiful-garden-walkway-with-lamps-at-night.jpg?s=612x612&w=0&k=20&c=SfJLkTxczMf8hu4PiT7Y5zV3905UvOeUtTn7cgbA9UA=",
  },
  {
    id: 3,
    name: "Talk a walk",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJ7lAw812qwxzC4-AZuLcfKxEgI3el0nDACwaX86uJA&s",
  },
  {
    id: 4,
    name: "Arcade",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjYWRlfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Go around the city by bicycle",
    image:
      "https://img.freepik.com/premium-photo/bike-couple-travel-with-black-man-asian-woman-cycling-city-sightseeing-adventure-bicycle-carbon-footprint-love-with-male-female-dating-urban-town-together_590464-93459.jpg",
  },
];

const Place = () => {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const places = formData.getAll("place");
    const note = formData.get("note");
    const data = {
      name: "places",
      value: {
        places,
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
      router.push("/thank-you");
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
        {placeData.map((item) => (
          <label htmlFor={"place-" + item.id} key={item.id}>
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
                id={"place-" + item.id}
                name={"place"}
                value={item.name}
              />
            </div>
          </label>
        ))}
        <div className="col-span-2 border shadow p-2">
          <h3>Or any place you want to go here.</h3>
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

export default Place;
