"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { getSessionStatus } from "./redux/features/get_session_status.slice";
//

import Loading from "./components/Loading/Loading";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const sessionStatus = useSelector((state: RootState) => state.session_status);
  const pendingStatus = useSelector(
    (state: RootState) => state.session_status.status
  );

  useEffect(() => {
    dispatch(getSessionStatus());
  }, [dispatch]);

  setTimeout(() => {
    if (pendingStatus !== "pending") {
      if (sessionStatus.session.status === 200) {
        router.push("/chats");
      } else {
        router.push("/login");
      }
    }
  }, 1000);

  return <Loading />;
}
