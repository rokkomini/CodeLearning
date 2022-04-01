var number = function (busStops) {
  var passengers = 0;
  busStops.forEach((stop) => {
    passengers += stop[0];
    passengers -= stop[1];
  });
  return passengers;
};
console.log(
  "number function:",
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
