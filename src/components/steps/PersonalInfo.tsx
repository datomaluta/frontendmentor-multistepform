import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <h1 className="text-primary text-2xl font-bold">Personal Info</h1>
      <p className="text-slate-400 mt-1 mb-4">
        Please provide your name, email address and phone number.
      </p>

      <form className="flex flex-col gap-5">
        <div>
          <label className="block text-sm mb-1 text-primary">Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className="p-2 border border-slate-300 w-full rounded-md focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-primary">Email</label>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            className="p-2 border border-slate-300 w-full rounded-md focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-primary">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="e.g. + 1 234 567 890"
            className="p-2 border border-slate-300 w-full rounded-md focus:border-primary focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
