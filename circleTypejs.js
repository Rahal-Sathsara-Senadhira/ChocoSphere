new CircleType(document.getElementById('circletext'));



// circle text
let circleType = new CircleType(document.getElementById('text'));

circleType.dir(1);

const splitter = new GraphemeSplitter();
new CircleType(
  document.getElementById('text'),
  splitter.splitGraphemes.bind(splitter)
);

