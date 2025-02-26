import React from 'react';

export default function Border({ color }: {
  color: string,
}) {

  return (
    <div
      id="border"
      className="top-0 absolute w-[calc(100%-56px)] h-[calc(100%-56px)] m-[28px] border-2 border-solid p-2"
      style={{ borderColor: color }}
    >
      <div
        className="relative w-[calc(100%-24px)] h-[calc(100%-24px)] m-[12px] border"
        style={{ borderColor: color }}
      />
    </div>
  );
};
