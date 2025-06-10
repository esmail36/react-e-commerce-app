import list from "../data";
import ShopCart from "./ShopCart";
import "../styles/Amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((list) => (
        <ShopCart key={list.id} handleItem={handleClick} list={list} />
      ))}
    </section>
  );
};

export default Amazon;
