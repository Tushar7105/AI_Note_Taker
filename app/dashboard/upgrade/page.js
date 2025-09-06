import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <h2 className="font-medium text-3xl text-gray-900">Plans</h2>
      <p className="text-gray-600">
        Upgrade your plan to upload multiple PDFs and take notes
      </p>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
            <div
            className="rounded-2xl border border-black p-6 shadow-xs ring-2 ring-black sm:order-last sm:px-8 lg:p-12"
            >
            <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900">
                Pro
                <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> ₹450 </strong>

                <span className="text-sm font-medium text-gray-700">/month</span>
                </p>
            </div>

            <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Unlimited PDF uploads</span>
                </li>

                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Unlimited AI query </span>
                </li>

                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> No limit on File-size </span>
                </li>

                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Priority Customer Support </span>
                </li>

                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Phone support </span>
                </li>

                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Community access </span>
                </li>
            </ul>
            <Link 
                href={'/dashboard/upgrade/payment'}
                className="mt-8 block rounded-full border border-black bg-black px-12 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 hover:ring-1 hover:ring-gray-800 focus:ring-3 focus:outline-hidden"> 
            
                Get Started
            </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 shadow-xs sm:px-8 lg:p-12">
            <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900">
                Starter
                <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> Free </strong>

                </p>
            </div>

            <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> 5 PDF uploads </span>
                </li>

                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> 15 AI query a day </span>
                </li>

                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Max 10 MB file  </span>
                </li>

                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-black stroke-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Customer Support </span>
                </li>
            </ul>

           
            </div>
        </div>
        </div>
    </div>
  );
}

export default Page;
