import { auth } from "@clerk/nextjs";

type Props = {};

function Dashboard({}: Props) {
  const {userId} = auth()
  return <div>Dashboard user is {userId}</div>;
}

export default Dashboard;
