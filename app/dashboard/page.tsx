import Dropzone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";

type Props = {};

function Dashboard({}: Props) {
  const { userId } = auth();
  return (
    <div>
      <Dropzone />
    </div>
  );
}

export default Dashboard;
