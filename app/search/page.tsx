'use client';
import React, { useState } from 'react';
export default function Page() {
  const [inputValue, setInputValue] = useState('');
  const [dogData, setDogData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${inputValue}/images`,
      );
      const data = await response.json();
      setDogData(data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
    setInputValue('')
  };
  const dogDataMap = dogData?.message.map((item: string) => {
    return (
      <img style={{ width: 400, height: 400 }} src={item} alt="random image" />
    );
  });
  if (error) {
    return <p>An error occurred: {error}</p>;
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-4 text-3xl ">Search by Breed!</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className='w-full'>
        <label className="m-4m block text-xl">
          Breed name:
          <br />
          <input
            type="text"
            placeholder="Type in a dogbreed to begin"
            value={inputValue}
            onChange={handleChange}
            className="form-input w-full mt-4 outline outline-2 outline-offset-2 outline-neutral-200"
          />
        </label>
        </div >
        <div className='grid justify-items-center'>
        <button type="submit" className="btn rounded bg-green-500 text-white mt-4 py-1 px-4 hover:bg-green-700">
          Search
        </button>
        </div>
      </form>
      {dogData ? (
        <div className="mt-8 grid grid-cols-3 gap-4">{dogDataMap}</div>
      ) : null}
    </div>
  );
}