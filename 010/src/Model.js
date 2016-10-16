'use strict';

const Model = {
  _activities: [
    {
      id: 3,
      alt: 'Bicycle',
      name: 'Cycling',
      // This actiity will be started by default
      started: new Date().getTime(),
      timeSpent: 120
    },
    {
      id: 7,
      alt: 'Swimmer',
      name: 'Swimming',
      timeSpent: 60
    },
    {
      id: 9,
      alt: 'Runners',
      name: 'Running',
      timeSpent: 30
    }
  ],

  getActivities: function () {
    return Model._activities.slice(0);
  }
};
