export const snackbarMsg = {
  correct: "Correct!",
  error: "Try again!",
};

export const result = {
  //result is correct
  correct: {
    //show snackbar and lottie
    show: {
      showSnackbar: true,
      isCorrect: true,
      showLottie: true,
    },
    //hide snackbar and lottie
    hide: {
      showSnackbar: false,
      isCorrect: true,
      showLottie: false,
    },
  },
  //result is incorrect
  incorrect: {
    //show snackbar no lottie
    show: {
      showSnackbar: true,
      isCorrect: false,
      showLottie: false,
    },
    //hide snackbar
    hide: {
      showSnackbar: false,
      isCorrect: false,
      showLottie: false,
    },
  },
};
