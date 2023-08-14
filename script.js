"use strict";
const cards = [];
const limitations = document.querySelector(".limitations");
class Card {
  constructor(img, header, content) {
    this.img = img;
    this.header = header;
    this.content = content;
  }
}

const gender = new Card(
  "./images/icon-gender.svg",
  "Gender",
  "The development and body fat composition of girls and boys vary with age. Consequently a child's age and gender are considered when evaluating their BMI."
);

const age = new Card(
  "./images/icon-age.svg",
  "Age",
  "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
);

const muscle = new Card(
  "./images/icon-muscle.svg",
  "Muscle",
  "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat"
);
const pregnancy = new Card(
  "./images/icon-pregnancy.svg",
  "Pregnancy",
  "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
);
const race = new Card(
  "./images/icon-race.svg",
  "Race",
  "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
);
cards.push(gender, age, muscle, pregnancy, race);

cards.map((el) => {
  const html = `
<div class="limitations-card">
        <div class="card-heading">
          <img
          src="${el.img}"
          />
        
        <h3 class="limitations-card__title title-text">${el.header}</h3>
        </div>
        <p class="limitations-card__content article-text">
          ${el.content}
        </p>
      </div>`;

  limitations.insertAdjacentHTML("beforeend", html);
});
