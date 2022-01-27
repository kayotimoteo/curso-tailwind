import React from "react";
import logo from "./logo.svg";

function Flex() {
  return (
    <>
      <div className="flex flex-row bg-red-300">
        <div className="bg-red-600 p-6 m-2">1</div>
        <div className="bg-red-600 p-6 m-2">2</div>
        <div className="bg-red-600 p-6 m-2">3</div>
      </div>
      <div className="flex flex-col bg-blue-300">
        <div className="bg-blue-600 p-6 m-2">1</div>
        <div className="bg-blue-600 p-6 m-2">2</div>
        <div className="bg-blue-600 p-6 m-2">3</div>
      </div>
      <div className="flex flex-row-reverse bg-green-300">
        <div className="bg-green-600 p-6 m-2">1</div>
        <div className="bg-green-600 p-6 m-2">2</div>
        <div className="bg-green-600 p-6 m-2">3</div>
      </div>
      <div className="flex flex-col-reverse bg-pink-300">
        <div className="bg-pink-600 p-6 m-2">1</div>
        <div className="bg-pink-600 p-6 m-2">2</div>
        <div className="bg-pink-600 p-6 m-2">3</div>
      </div>
      <div className="flex flex-col bg-teal-100">
        <div className="bg-teal-300 p-6 m-2">1</div>
        <div className="bg-teal-400 p-6 m-2">2</div>
        <div className="bg-teal-500 p-6 m-2">3</div>
        <div className="bg-teal-600 p-6 m-2">4</div>
        <div className="bg-teal-700 p-6 m-2">5</div>
        <div className="bg-teal-800 p-6 m-2">6</div>
      </div>
      {/* Wrap */}
      <div className="flex flex-wrap bg-red-200">
        <div className="bg-red-300 p-6 m-2">1</div>
        <div className="bg-red-400 p-6 m-2">2</div>
        <div className="bg-red-500 p-6 m-2">3</div>
        <div className="bg-red-600 p-6 m-2">4</div>
        <div className="bg-red-700 p-6 m-2">5</div>
        <div className="bg-red-800 p-6 m-2">6</div>
      </div>
      <div className="flex container bg-green-400 p-8">
        <div className="flex-1 bg-green-800">1</div>
        <div className="flex-1 bg-green-600">2</div>
        <div className="flex-none bg-green-200">3</div>
      </div>
      {/* Order */}
      <div className="flex flex-wrap bg-purple-200">
        <div className="bg-red-300 p-6 m-2 order-last">1</div>
        <div className="bg-red-400 p-6 m-2 order-5">2</div>
        <div className="bg-red-500 p-6 m-2 order-4">3</div>
        <div className="bg-red-600 p-6 m-2 order-3">4</div>
        <div className="bg-red-700 p-6 m-2 order-2">5</div>
        <div className="bg-red-800 p-6 m-2 order-first">6</div>
      </div>
      <div className="flex flex-wrap bg-teal-200">
        <div className="bg-teal-300 p-6 m-2 lg:order-last">1</div>
        <div className="bg-teal-400 p-6 m-2 lg:order-5">2</div>
        <div className="bg-teal-500 p-6 m-2 lg:order-4">3</div>
        <div className="bg-teal-600 p-6 m-2 lg:order-3">4</div>
        <div className="bg-teal-700 p-6 m-2 lg:order-2">5</div>
        <div className="bg-teal-800 p-6 m-2 lg:order-first">6</div>
      </div>
    </>
  );
}

export default Flex;
