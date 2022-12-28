'use client';
import React, {useState, useEffect} from 'react';

export default function Page() {
    const [matches, setMatches] = useState(0);
    const [dogData, setDogData] = useState<any>(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [count, setcount] = useState(0);
    const [isMatch, setIsMatch] = useState(false);
    const myNumber = 2;

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setDogData(data);
          } catch (error:any) {
            setError(error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
      }, [count]);
    
    const handleClick = (e:any) => {
        setcount(count+1)
        if (e.target.name === 'thumbsup'){
            const randomNumber = Math.floor(Math.random() * 5) + 1
            if (randomNumber === myNumber){
                setMatches(matches+1)
                setIsMatch(true)
            }else {
                setIsMatch(false)
            }
        }else{
            setIsMatch(false)
        }
        
    };

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>An error occurred: {error}</p>;
      }
    return (
    <>
    <div>
        <h1>Make New Friends!</h1>
        <h3>Thumbs up on any pups you'd like to meet!</h3>
        {dogData && <img src={dogData?.message} alt="dog" /> }
        <button name='thumbsup' onClick={handleClick}>👍</button>
        <button onClick={(e) => handleClick(e)}>👎</button>
        <h1>Made friends with {matches} pups so far!</h1>
        <p>{isMatch? "Yay! That Pup Liked You Too!!!" : null} </p>
    </div>
    </>
    )
}