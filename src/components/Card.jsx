import React from 'react';
import postImage from '../assets/imgs/one.jpg';

export const Card = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xl overflow-hidden rounded-xl border border-gray-400 bg-gray-200 shadow-lg">
        <img className="w-full" src={postImage} alt="Contenuto del post" />
        <div className="p-6">
          <div className="mb-2 text-center text-2xl font-bold uppercase text-gray-900">
            Siamo uno, ma diversi
          </div>
          <p className="text-base text-gray-700">
            I nativi americani usavano cacciare i bufali spaventandoli in modo
            da spingerli verso un dirupo. Allo stesso modo l’essere umano fugge
            da ciò che non capisce: invece di affrontare l’ignoto, corre verso
            la sua distruzione. La diversità, di qualunque genere, è fra le
            maggiori paure che l’uomo sperimenta e che lo spinge su una strada
            estremamente pericolosa: questo è il senso di “One”, una canzone mai
            capita.
          </p>
          <p className="mt-2 text-base italic text-gray-900">
            «Siamo la stessa cosa ma non siamo uguali... abbiamo la possibilità
            di sostenerci l’un l’altro... come una cosa sola»{' '}
            <span className="not-italic">(© U2)</span>
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
