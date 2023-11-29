import React from 'react';
import postImage from '../assets/imgs/one.jpg';

export const Card = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-lg overflow-hidden rounded-xl bg-gray-300 shadow-lg">
        <img className="w-full" src={postImage} alt="Contenuto del post" />
        <div className="p-6">
          <div className="mb-2 text-center text-2xl font-bold uppercase text-gray-900">
            Siamo uno, ma diversi
          </div>
          <p className="text-base text-gray-700">
            Gli indiani nativi americani usavano cacciare i bufali spaventandoli
            in modo da spingerli verso un dirupo, da cui sarebbero precipitati,
            morendo. Allo stesso modo l’essere umano fugge dalle paure che non
            capisce, e lo fa senza sapere in quale direzione sta andando e cosa
            succederà alla fine della sua fuga. Invece di capire e di affrontare
            l’ignoto, corre verso la sua distruzione. Le disuguaglianze, di
            qualunque genere esse siano, sono una fra le maggiori paure che
            l’uomo sperimenta e che, invece di capire o per lo meno accettare,
            lo spingono su una strada estremamente pericolosa. Questo è il senso
            di “One”, una canzone mai capita.
          </p>
          <p className="mt-3 text-base italic text-gray-900">
            «Siamo la stessa cosa ma non siamo uguali, e abbiamo la possibilità
            di sostenerci l’un l’altro. Come una cosa sola».
          </p>
        </div>
        <div className="flex justify-center pb-4">
          <button className="rounded bg-yellow-700 px-4 py-2 font-bold text-white delay-200 hover:bg-yellow-600">
            Leggi di più
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
