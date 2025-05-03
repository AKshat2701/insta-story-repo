var arr = [
  {
    dp: "https://images.unsplash.com/photo-1594409855476-29909f35c73c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHdvbWFufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1589785148112-83debe32a7ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },

  {
    dp: "https://images.unsplash.com/photo-1594739033447-80ab21e24b4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1587762046729-c5fe0cd88abc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  },

  {
    dp: "https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1557977275-d261356f567f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
  },

  {
    dp: "https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
  },

  {
    dp: "https://images.unsplash.com/photo-1535979737658-bda006980c4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1615562715183-9528405b75ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
  },
];

var storyian = document.querySelector("#storyian");

var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
                <img id = "${idx}" src="${elem.dp}" alt="">
                </div>`;
});
storyian.innerHTML = clutter;

storyian.addEventListener("click", function (dets) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
