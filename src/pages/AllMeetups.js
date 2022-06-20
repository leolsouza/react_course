import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage()
{
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
    'https://react-course-936dc-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });

  }, []);

  
      if(isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }

    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}

export default AllMeetupsPage;

/*useEffect faz com que antes de um código ser percorrido, precise atender uma condição
sendo assim o primeiro argumento é a função que se quer executar, e o segundo é a condição que
se quer atender*/