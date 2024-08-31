import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOnlineStatus } from "../slices/networkStatusSlice";

const useOnlineStatus = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("online", () => {
      dispatch(setOnlineStatus(true));
    });

    window.addEventListener("offline", () => {
      dispatch(setOnlineStatus(false));
    });
  }, []);
};

export default useOnlineStatus;
