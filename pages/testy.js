import { useEffect } from 'react';

export default function Testy() {
    const google = async () => {
    const res = await fetch('api/newgapi');
    const data = await res; // Returns JSON data from API route
    console.log(data);
}

useEffect(() => {
    google();
}, []);
  return (
    <div>
      {google()}
    </div>
  );
}