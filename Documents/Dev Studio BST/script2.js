const cwTrack = document.getElementById("cw-track");
  const cwLeft = document.getElementById("cw-left");
  const cwRight = document.getElementById("cw-right");

  cwLeft.addEventListener("click", () => {
      cwTrack.scrollBy({
          left: -300,
          behavior: "smooth"
      });
  });

  cwRight.addEventListener("click", () => {
      cwTrack.scrollBy({
          left: 300,
          behavior: "smooth"
      });
      });






