var canvas = document.querySelector("#unity-canvas");

function unityShowBanner(msg, type) {
  var warningBanner = document.querySelector("#unity-warning");
  function updateBannerVisibility() {
    warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
  }
  var div = document.createElement('div');
  div.innerHTML = msg;
  warningBanner.appendChild(div);
  if (type == 'error') div.style = 'background: red; padding: 10px;';
  else {
    if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
    setTimeout(function () {
      warningBanner.removeChild(div);
      updateBannerVisibility();
    }, 5000);
  }
  updateBannerVisibility();
}

var buildUrl = "../../games-build/infinite-runner/Build";
var loaderUrl = buildUrl + "/26a8ee92bb988938ff747c3cc7af8eeb.loader.js";
var config = {
  arguments: [],
  dataUrl: buildUrl + "/15b572ba7569161b9a8509baa48eba5a.data",
  frameworkUrl: buildUrl + "/9ff9c198ff086a5fad13bb9a021b703b.framework.js",
  codeUrl: buildUrl + "/d5ede4017a69329b50c7af85b36ddecd.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "EjerecicioInfRunner",
  productVersion: "1.0",
  showBanner: unityShowBanner,
};

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  // var meta = document.createElement('meta');
  // meta.name = 'viewport';
  // meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
  // document.getElementsByTagName('head')[0].appendChild(meta);
  // document.querySelector("#unity-container").className = "unity-mobile";
  // canvas.className = "unity-mobile";
  var aux = document.createElement("div");
  aux.innerHTML += "<h1>Sorry, this game is not available for mobile devices.</h1>";
  document.getElementById("inf-runner-container").appendChild(aux);

} else {
  function resizeCanvas() {
    var parentWidth = canvas.parentElement.clientWidth;
    var width = parentWidth;
    var height = width * (9 / 16);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
}

document.querySelector("#unity-loading-bar").style.display = "block";

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {
    document.querySelector("#unity-progress-bar-full").style.width = 100 * progress + "%";
  }).then((unityInstance) => {
    document.querySelector("#unity-loading-bar").style.display = "none";
    document.querySelector("#unity-fullscreen-button").onclick = () => {
      unityInstance.SetFullscreen(1);
    };
  }).catch((message) => {
    alert(message);
  });
};

document.body.appendChild(script);