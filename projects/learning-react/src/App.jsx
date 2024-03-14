import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  const users = [
    {
      userName: 'nriq3',
      name: 'Enrique Ramírez',
      isFollowing: true
    },

    {
      userName: 'illojuan',
      name: 'Juan Alberto',
      isFollowing: true
    },

    {
      userName: 'jordiwild',
      name: 'Jordi Wild',
      isFollowing: false
    },

    {
      userName: 'jacksepticeye',
      name: 'Jacksepticeye',
      isFollowing: false
    }
  ]




  return (
    <section className="App">
      {
        users.map( ({ userName, name, isFollowing }) =>(
            <TwitterFollowCard
              key={name}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        )
      }   
    </section>
  );
}
