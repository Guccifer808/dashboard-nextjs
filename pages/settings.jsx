import { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailNotificationSettings, setEmailNotificationSettings] = useState({
    sendEmails: true,
    sendNewsletter: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to submit the form data
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex justify-between px-4 pt-4">
        <div className="mx-auto max-w-md p-6">
          <h1 className="mb-4 text-2xl font-bold">Settings</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-slate-700"
                htmlFor="name"
              >
                Edit name:
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-slate-700 shadow focus:outline-none"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-slate-700"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-slate-700 shadow focus:outline-none"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="mb-2 block font-bold text-slate-700"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-slate-700 shadow focus:outline-none"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="focus:shadow-outline rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700 focus:outline-none"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-medium">Email notifications</h3>
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                id="send-emails"
                className="form-checkbox h-5 w-5 text-green-400"
                checked={emailNotificationSettings.sendEmails}
                onChange={(e) =>
                  setEmailNotificationSettings((prevSettings) => ({
                    ...prevSettings,
                    sendEmails: e.target.checked,
                  }))
                }
              />
              <label htmlFor="send-emails" className="ml-2">
                Send me emails when there are important updates
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="send-newsletter"
                className="form-checkbox h-5 w-5 text-green-400"
                checked={emailNotificationSettings.sendNewsletter}
                onChange={(e) =>
                  setEmailNotificationSettings((prevSettings) => ({
                    ...prevSettings,
                    sendNewsletter: e.target.checked,
                  }))
                }
              />
              <label htmlFor="send-newsletter" className="ml-2">
                Subscribe to newsletter
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
