import Link from "next/link";
import PageWrapper from "./components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className=" min-h-screen py-16 flex justify-center items-center">
        <div className=" w-full max-w-md">
          <div className="relative flex flex-col items-center p-8">
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-[-1] opacity-10 text-blue-500 text-[520px] font-bold">
              404
            </div>
            <div className="text-center mb-6"></div>
            <h2 className="display-2 text-center text-white text-5xl font-bold ">
              Page not found
            </h2>
            <p className="text-center text-gray-300 mb-12 mt-4">
              It seems the page you&apos;re looking for no longer exists on this
              website.
            </p>
            <div>
              <Link
                href="/"
                className="link-wrapper white inline-block relative group"
              >
                <div className="text-white font-bold">Back to Homepage</div>
                <div className="link-underline-wrapper">
                  {/* TODO animated line */}
                  <div
                    style={{ width: "0%", height: "3px" }}
                    className="link-underline"
                  ></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
