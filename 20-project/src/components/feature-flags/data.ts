const dummyData = {
  showAccordion: true,
  showTicTacToe: true,
  showImageSlide: false,
  showRandomColor: false,
  showStarRating: false,
};

export default function featureFlagsDataService() {
  const randtime = Math.floor(Math.random() * 2000);
  return new Promise((resolve, reject) => {
    if (dummyData) setTimeout(() => resolve(dummyData), randtime);
    else reject("Unexpected Error ! Please try again");
  });
}
