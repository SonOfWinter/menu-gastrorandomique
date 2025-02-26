import React from 'react';

export default function MenuTitle({
  color, menuName, complementName, price,
}: {
  color: string,
  menuName: string;
  complementName: string;
  price: number;
}) {

  return (
    <>
      <h1 className="text-l" style={{ color: color }}>
        {menuName}
      </h1>
      <h2 className="text-s">{complementName}</h2>
      <p className="font-normal text-s leading-3 text-center opacity-60">
        {`${price}€`}
      </p>
    </>
  );
}
;
