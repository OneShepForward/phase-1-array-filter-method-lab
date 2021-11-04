// Code your solution here

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

        // The function below returns an empty array when I run 
            //  findMatching(drivers, 'Bobby')
        // Why doesn't it filter Bobby for me? It passes the test...

//   function findMatching(driverPool, requestedDriver) {
//     return driverPool.filter(function (driver) {
//         return driver === requestedDriver
//     });
//     }

const driverNames = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

    function findMatching(driverPool, requestedDriver) {
        return driverPool.filter(function (driver) {
            return driver.toLowerCase() === requestedDriver.toLowerCase()
        });
        }


    function fuzzyMatch(driverPool, requestedDriver) {
        return driverPool.filter(function (driver) {
            return driver.substring(0,2) === requestedDriver.substring(0,2)
        });
        }

    
    // function matchName(driverPool, requestedDriver) {
    //     return driverPool.filter(function (driver) {
    //         return driver.name === requestedDriver;
    //     });
    //     }

        // For some reason, typing this out into an arrow function
        // makes it much clearer to me.
    function matchName(driverPool, requestedDriver) {
        return driverPool.filter(driver => driver.name === requestedDriver);
        }