import React from "react";

const list = [
  {
    numbers: "100+",
    text: "QR CODES MADE",
  },
  {
    numbers: "349",
    text: "SONGS PUBLISHED",
  },
  {
    numbers: "10,000+",
    text: "STREAMS",
  },
];

const StreamsSec = () => {
  return (
    <section className="w-full bg-[url('/images/about/stream-bg.png')] bg-no-repeat bg-center bg-cover">
      <section className="container mx-auto px-10 py-[60px] grid grid-cols-1 lg:grid-cols-3 gap-[37px]">
        {list.map((list, i) => (
          <List key={i} numbers={list.numbers} text={list.text} />
        ))}
      </section>
    </section>
  );
};

export default StreamsSec;

const List = ({ numbers, text }) => {
  return (
    <div className="flex flex-col items-center">
      <h6 className="text-primary text-[80px] font-marker">{numbers}</h6>
      <p className="text-white font-noka text-xl md:text-[30px] font-medium uppercase">
        {text}
      </p>
    </div>
  );
};
