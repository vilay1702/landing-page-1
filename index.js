const customerReview = document.querySelectorAll(".customer-review-card");
const length = customerReview.length;

customerReview.forEach((review) => {
  console.log(review.style.display);
  review.classList.toggle("customer-review-card-transition");
});
customerReview[0].classList.toggle("customer-review-card-transition");

const prevReviewBtns = document.querySelectorAll(".review-left-btn");
const nextReviewBtns = document.querySelectorAll(".review-right-btn");

prevReviewBtns[0].disabled = true;
nextReviewBtns[nextReviewBtns.length - 1].disabled = true;

let i = 0;

nextReviewBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (i < length - 1) {
      customerReview[i].classList.toggle("customer-review-card-transition");
      i += 1;
      customerReview[i].classList.toggle("customer-review-card-transition");
    }
  });
});

prevReviewBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (i > 0) {
      customerReview[i].classList.toggle("customer-review-card-transition");
      i -= 1;
      customerReview[i].classList.toggle("customer-review-card-transition");
    }
  });
});
