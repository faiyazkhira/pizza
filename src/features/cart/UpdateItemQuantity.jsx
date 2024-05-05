import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { IncreaseItem, decreaseItem } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity} </span>
      <Button type="round" onClick={() => dispatch(IncreaseItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
