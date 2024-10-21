
import { 
  Form,
  useLoaderData,
  useFetcher,
} from "react-router-dom";
import { fakeNetResult } from "../utils/fakeTools";

export async function loader({ params }:any) {
  const result = await fakeNetResult("test");
  console.log(result);
  return result;
}

export default function Trending() {
  const result = useLoaderData();
  console.log(`trending:${result}`);

  return (
    <div>
      Trending
    </div>
  );
}

