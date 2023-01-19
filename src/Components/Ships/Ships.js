import {useEffect, useState} from "react";
import {Ship} from "../Ship/Ship";


const Ships = () => {
    const [ships, setShips] = useState([])

    useEffect(() => {
            fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json()).then(value => setShips(value))
        }, []
    )

    return (
        <div>
            {
                ships.filter(value => value.launch_year !== "2020")
                    .map(ship => <Ship key={ship.flight_number} ship={ship}/>)
            }
        </div>
    );
};

export {Ships};

