import MyMusic from "./MyMusic";
import MyTransactions from "./MyTransactions";
import PlayBar from "./PlayBar";

const MyMusicTransactionSec = () => {
  return (
    <div className="mt-6 xl:mt-8 grid grid-cols-1 xl:grid-cols-12 gap-8">
      <div className="xl:col-span-12">
        <PlayBar />
      </div>
      <div className="xl:col-span-6">
        <MyMusic />
      </div>
      <div className="xl:col-span-6">
        <MyTransactions />
      </div>
    </div>
  );
};

export default MyMusicTransactionSec;
