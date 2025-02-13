"use client";

import useWindowWidth from "@/hooks/useWindowWidth";

const transactions = [
  "4.000 $VIP - Gus Dapperton Tune For Late Spring - 27 Nov 24",
  "3.000 $VIP - Welsey Joseph The Bloom - 24 Nov 24",
  "5.500 $VIP - Billie Eilish Ocean Eyes - 20 Nov 24",
  "2.750 $VIP - The Weeknd Blinding Lights - 18 Nov 24",
  "6.200 $VIP - Drake God's Plan - 15 Nov 24",
  "4.800 $VIP - Taylor Swift Lover - 12 Nov 24",
  "3.300 $VIP - Ariana Grande Positions - 10 Nov 24",
  "7.100 $VIP - Post Malone Circles - 08 Nov 24",
  "5.000 $VIP - Dua Lipa Don't Start Now - 05 Nov 24",
  "2.500 $VIP - Ed Sheeran Shape of You - 02 Nov 24",
  "3.800 $VIP - Justin Bieber Peaches - 30 Oct 24",
  "6.500 $VIP - Bruno Mars Leave The Door Open - 28 Oct 24",
  "4.200 $VIP - Olivia Rodrigo Good 4 U - 25 Oct 24",
  "2.900 $VIP - Khalid Better - 22 Oct 24",
  "5.700 $VIP - SZA Snooze - 19 Oct 24",
  "4.400 $VIP - Travis Scott Goosebumps - 16 Oct 24",
  "3.600 $VIP - The Chainsmokers Closer - 14 Oct 24",
  "6.800 $VIP - Harry Styles As It Was - 12 Oct 24",
];

const MyTransactions = () => {
  const isMobile = useWindowWidth(1024);
  const myTransactions = isMobile ? transactions.slice(0, 14) : transactions;
  return (
    <div className="border border-white p-5 lg:p-10 rounded-[20px] bg-[#040000]">
      <h6 className="text-xl lg:text-[40px] font-bold font-noka text-white">
        My Transactions
      </h6>
      <div className="mt-5 lg:max-h-[700px] flex flex-col gap-5 lg:overflow-y-scroll custom-scroll pr-4 md:pr-10">
        {myTransactions.map((list, i) => (
          <List key={i} list={list} />
        ))}
      </div>
      <button className="block lg:hidden mt-5 underline text-xs font-medium text-white font-noka">
        View All
      </button>
    </div>
  );
};

export default MyTransactions;

const List = ({ list }) => {
  return (
    <p className="text-[10px] md:text-base text-white font-bold font-noka">
      {list}
    </p>
  );
};
