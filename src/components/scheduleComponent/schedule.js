import React from 'react';
import ScheduleTable from './schedule-table';

class Schedule extends React.Component {
    render() {
        return (
            <div className="Schedule">
                {/* <h1 className="tab-title">Hackathon Schedule</h1> */}
                <ScheduleTable />
            </div>
        );
    }
}

export default Schedule;