import React from 'react';

class ScheduleTable extends React.Component {
    render() {
        return (
            <div className="Learn container">
                <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">9:00 AM</th>
                        <td>Check-in/Set-up</td>
                        <td>Chase mice walk on keyboard sniff all the things eat and than sleep on your face. Meeeeouw paw at your fat belly. Ask to go outside and ask to come inside and ask to go outside and ask to come inside hell is other people i could pee on this if i had the energy. My cat stared at me he was sipping his tea, too. </td>
                        <td><a href="#">I Go somewhere</a></td>
                    </tr>
                    <tr>
                        <th scope="row">10:00 AM</th>
                        <td>Jacob</td>
                        <td>Throwup on your pillow give me attention or face the wrath of my claws for jump around on couch, meow constantly until given food, yet spread kitty litter all over house but prance along on top of the garden fence, annoy the neighbor's dog and make it bark, or crash against wall but walk away like nothing happened, a nice warm laptop for me to sit on.</td>
                        <td><a href="#">I Go somewhere</a></td>
                    </tr>
                    <tr>
                        <th scope="row">11:00 AM</th>
                        <td>Larry the Bird</td>
                        <td>Howl on top of tall thing this cat happen now, it was too purr-fect!!! </td>
                        <td><a href="#">I Go somewhere</a></td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default ScheduleTable;