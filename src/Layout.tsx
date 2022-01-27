import React from 'react';
import logo from './logo.svg';

function Layout() {
  return (
    <>
  <div className="container bg-green-300 mx-auto p-4 my-4 text-green-500 border-green-600 border-2">
    <p>O texto do container</p>
  </div>
  <div className="container bg-green-400 md:bg-blue-400">
    <p>Exercicio 1</p>

  </div>
  <div className="container bg-purple-700 border-2 border-purple-900 m-4 border-box p-10">
    <p>Border box</p>
  </div>
  <div className="container bg-teal-400 border-2 border-teal-900 m-4 box-content p-10">
    <p>Box content</p>
  </div>
  <div className="container">
    <span className="block bg-red-300">Não são elementos de bloco</span>
    <span className="block bg-red-300">Não são elementos de bloco</span>
    <div className="bg-blue-500 inline-block">Block</div>
    <div className="bg-blue-500 inline-block">Block</div>
    <div className="bg-green-500 hidden">Estou aparecendo</div>
  </div>
  <div className="container bg-teal-500">
    <span className="bg-red-300 inline-block">Block</span>
    <div className="bg-blue-500 inline-block">Block</div>
    <div className="bg-green-500 inline-block">Block</div>
  </div>

  <div className="bg-gray-500 float-right">Float Right</div>
  <div className="bg-gray-700 float-left">Float Left</div>
  <div className="clearfix"></div>
  <div className="bg-gray-500 float-right">Float Right</div>
  <div className="bg-gray-700 float-left">Float Left</div>

  <div className="overflow-hidden h-16 m-6 bg-red-300">
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
  </div>

  <div className="overflow-auto h-16 m-6 bg-blue-300">
    <p>Testando overflow AUTO</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
  </div>

  <div className="overflow-x-auto h-16 m-6 bg-green-300">
    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
  </div>

  <div className="overflow-y-auto h-16 m-6 bg-blue-300">
    <p>Testando overflow AUTO</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
    <p>Testando overflow</p>
  </div>
  <div className="relative bg-pink-600">
    teste
    <div className="absolute top-0 right-0 bg-pink-900">Absolute</div>
  </div>
  <div className="relative h-10 border-green-400">
    teste
    <div className="absolute bottom-0 right-0 bg-pink-900">Div</div>
  </div>
  <div className="container bg-red-400 invisible m-10">
    <p>Estou oculto</p>
  </div>
  <div className="container relative h-20">
    <div className="bg-red-300 h-20 w-20 p-6 absolute z-10">Na frente</div>
    <div className="bg-red-600 h-20 w-20 p-6 absolute m-4">Atras</div>
  </div>
  <p>Opa</p>
  <div className="container relative h-20">
    <div className="bg-red-300 h-20 w-20 p-6 absolute z-30">Atras</div>
    <div className="bg-red-600 h-20 w-20 p-6 absolute z-10 m-6">Meio</div>
    <div className="bg-red-900 h-20 w-20 p-6 absolute m-10">Na frente</div>
  </div>
  </>
  );
}

export default Layout;
