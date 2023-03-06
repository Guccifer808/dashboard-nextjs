import { mockData } from "@/mockData";
import { GiCharacter } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";

const customers = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex justify-between px-4 pt-4">
        <h2 className="text-2xl font-bold">Customers</h2>
        <h2>Welcome back, user</h2>
      </div>
      <div className="p-4">
        <div className="m-auto w-full overflow-y-auto rounded-lg border bg-white p-4">
          <div className="my-3 grid cursor-pointer grid-cols-2 items-center justify-center gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 md:justify-between lg:grid-cols-4">
            <span className="text-left">Name</span>
            <span className="hidden text-right sm:grid sm:text-left">
              Email
            </span>
            <span className="hidden lg:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {mockData.map((order, id) => (
              <li
                key={id}
                className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between gap-2 rounded-lg bg-slate-50 p-2 hover:bg-slate-100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                <div className="flex items-center">
                  <div className="rounded-lg bg-green-100 p-3">
                    <GiCharacter className="text-green-500" />
                  </div>
                  <p className="pl-4">
                    {order.name.first + " " + order.name.last}
                  </p>
                </div>
                <p className="hidden truncate text-right text-slate-700 sm:flex sm:text-left">
                  {order.email}
                </p>
                <p className="hidden lg:flex">{order.date}</p>

                <div className="hidden items-center justify-between sm:flex">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
