crossPlatformShapes.pathCalculator.arc = function(data){
  'use strict';

  var x = data.x,
    y = data.y,
    width = data.width,
    height = data.height;

  var yControlPoint = (height * (2/3);

  var pathData = [{command: 'moveTo', points: [x, y- 0.5*height]},
    {command: 'bezierCurveTo', points: [(x), (y- 0.5*height + yControlPoint), (x + width), (y- 0.5*height + yControlPoint), (x + width), (y- 0.5*height)]}];

  return pathData;
};
