import Dropzone from "@/components/Dropzone";
import { db } from "@/firebase";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";

type Props = {};

function Dashboard({}: Props) {
  const { userId } = auth();
  const docResults = await getDocs(collection(db, "users", userId!, "files"));
  return (
    <div>
      <Dropzone />
    </div>
  );
}

export default Dashboard;
