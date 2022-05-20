import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout title="Not Found">
      <div className="relative" id="layout-conntainer">
        <div className="min-h-screen flex flex-col px-4 relative items-center justify-center">
          <h1 className="font-extrabold text-6xl my-6">404 Not Found</h1>
          <p className="my-6 text-2xl text-center">I think you are lost</p>
          <div className="flex flex-col md:flex-row">
            <div className="m-2">
              <Link href="/">
                <a className="bg-orange-600 cursor-pointer text-center text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-200 w-full">
                  Back to Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
