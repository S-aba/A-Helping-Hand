/* .js files add interaction to your website */
var factList = [
  "More than two-thirds of the world’s refugees have fled from just five countries: Syria, Venezuela, Afghanistan, South Sudan, and Myanmar.","Almost 1 million children were born as refugees between 2018 and 2020.","41% of all forcibly displaced people are children.","48% of all refugee children remain out of school, and accessing education becomes harder as they get older.","100 million people have already been forced to flee their homes, more than ever before.",
];

var fact = document.getElementById("fact");

var myButton = document.getElementById("myButton");

var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count = count + 1;
  if (count == factList.length){
    count = 0;
  }
}
