import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }:any) {
  // throw new Error("oh dang!");  // 抛异常测试, 中断下面的流程
  await deleteContact(params.contactId);
  return redirect("/");
}