import React from "react";
import logo from "./logo.svg";

function Grid() {
  return (
    <>
      <div className="grid bg-red-300 grid-cols-4">
        <div className="bg-red-600">1</div>
        <div className="bg-red-600">2</div>
        <div className="bg-red-600">3</div>
        <div className="bg-red-600">4</div>
      </div>

      <div className="grid bg-green-300 grid-cols-2">
        <div className="bg-green-600">1</div>
        <div className="bg-green-600">2</div>
      </div>
      <div className="grid bg-blue-300 grid-cols-3 m-2">
        <div className="bg-blue-600">1</div>
        <div className="bg-blue-900">2</div>
        <div className="bg-blue-600">3</div>
        <div className="bg-blue-900">4</div>
        <div className="bg-blue-600">5</div>
        <div className="bg-blue-900">6</div>
        <div className="bg-blue-600">7</div>
        <div className="bg-blue-900">8</div>
        <div className="bg-blue-600">9</div>
      </div>
      <div className="grid grid-cols-6 m-2">
        <div className="col-span-1 bg-yellow-500">
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col-span-5 bg-blue-400">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            iste, corrupti dignissimos illo ipsam esse nemo eius exercitationem
            adipisci quidem magnam consectetur! Officia, esse? Quas ullam
            laudantium atque totam quia. Optio deserunt, iste nulla facilis
            nesciunt asperiores velit officia veniam, cupiditate non et odio
            eius ad magnam quidem. Mollitia sint ut libero eos corrupti maiores,
            quae perspiciatis error illum iusto? Doloribus nam saepe et cum
            quasi, accusantium reiciendis perspiciatis a, maiores facere vel
            ullam.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 m-2">
        <div className="col-span-4 bg-red-100">Barra de navegação</div>
        <div className="col-span-1 bg-red-700">
          <p>Barra lateral esquerda</p>
        </div>
        <div className="col-span-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem
            quia vitae maxime! Dicta, saepe. Maiores tempora officiis itaque
            iste quisquam, perspiciatis cupiditate incidunt! Ducimus laudantium
            beatae molestias labore ad. Repellendus recusandae laborum
            voluptatibus corrupti sint officiis accusamus beatae sunt esse
            alias. Voluptates laudantium aspernatur hic laborum maxime ratione
            maiores.
          </p>
        </div>
        <div className="col-span-1 bg-red-900">
          <p>Barra lateral direita</p>
        </div>
        <div className="col-span-4 bg-red-800">Footer</div>
      </div>
      <div className="grid grid-cols-4 m-2">
        <div className="col-span-4 bg-red-100">Barra de navegação</div>
        <div className="col-span-1 bg-red-700">
          <p>Barra lateral</p>
        </div>
        <div className="col-span-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem
            quia vitae maxime! Dicta, saepe. Maiores tempora officiis itaque
            iste quisquam, perspiciatis cupiditate incidunt! Ducimus laudantium
            beatae molestias labore ad. Repellendus recusandae laborum
            voluptatibus corrupti sint officiis accusamus beatae sunt esse
            alias. Voluptates laudantium aspernatur hic laborum maxime ratione
            maiores.
          </p>
        </div>
        <div className="col-span-4 bg-red-800">Footer</div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col">
        <div className="bg-green-400">1</div>
        <div className="bg-green-600">2</div>
        <div className="bg-green-400">3</div>
        <div className="bg-green-600">4</div>
        <div className="bg-green-400">5</div>
        <div className="bg-green-600">6</div>
        <div className="bg-green-400">7</div>
        <div className="bg-green-600">8</div>
        <div className="bg-green-400">9</div>
      </div>
      {/* Gap */}
      <div className="grid grid-cols-3 m-4 gap-4">
        <div className="bg-purple-400">1</div>
        <div className="bg-purple-600">2</div>
        <div className="bg-purple-400">3</div>
        <div className="bg-purple-600">4</div>
        <div className="bg-purple-400">5</div>
        <div className="bg-purple-600">6</div>
        <div className="bg-purple-400">7</div>
        <div className="bg-purple-600">8</div>
        <div className="bg-purple-400">9</div>
      </div>
      <div className="grid grid-cols-2 m-4 gap-6">
        <div className="bg-purple-400">1</div>
        <div className="bg-purple-600">2</div>
        <div className="bg-purple-400">3</div>
        <div className="bg-purple-600">4</div>
      </div>
    </>
  );
}

export default Grid;
