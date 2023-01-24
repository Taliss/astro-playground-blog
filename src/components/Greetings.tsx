import { useState } from 'react';

type GreetingsProps = {
  messages: string[];
};

const Greeting = ({ messages }: GreetingsProps) => {
  const randomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3>{greeting}! Than you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
};

export default Greeting;
