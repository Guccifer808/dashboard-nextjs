import { mockData } from "@/mockData/mockData";
import { GiCharacter } from "react-icons/gi";

const customers = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex justify-between p-4">
        <h2>Customers</h2>
        <h2>Welcome back, user</h2>
      </div>
      <div className="p-4">
        <div className="m-auto w-full overflow-auto rounded-lg border bg-white p-4">
          <div className="cursor-poiner my-3 grid grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-4">
            <span>Name</span>
            <span className="text-right sm:text-left">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {mockData.map((order, id) => (
              <li
                key={id}
                className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-slate-50 p-2 hover:bg-slate-100 sm:grid-cols-3 md:grid-cols-4"
              >
                <div className="flex items-center whitespace-nowrap">
                  <div className="rounded-lg bg-green-100 p-3">
                    <GiCharacter className="text-green-500" />
                  </div>
                  <p className="pl-4">
                    {order.name.first + " " + order.name.last}
                  </p>
                </div>
                <p className="text-right text-slate-700 sm:text-left">
                  {order.email}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
