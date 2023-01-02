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
      <h1 className="mb-4 text-3xl font-bold">Search by Breed</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <label className="mb-2 block text-xl font-bold">
          Breed name:
          <input
            type="text"
            placeholder="type a dogbreed to begin"
            value={inputValue}
            onChange={handleChange}
            className="form-input w-full"
          />
        </label>
        <button type="submit" className="btn btn-blue mt-4 w-full">
          Search
        </button>
      </form>
      {dogData ? (
        <div className="mt-8 grid grid-cols-3 gap-4">{dogDataMap}</div>
      ) : null}
    </div>
  );
}