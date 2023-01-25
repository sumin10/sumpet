import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateCart, getCart, removeCart } from "../api/firebase";
import { useUserContext } from "../context/UserContext";

export default function useCart() {
  const { uid } = useUserContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery(["carts", uid], () => getCart(uid));

  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid]);
      },
    }
  );

  const removeItem = useMutation((id) => removeCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
