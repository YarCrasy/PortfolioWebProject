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

var buildUrl = "../../games-build/wack-the-mole/Build";
var loaderUrl = buildUrl + "/WebBuild.loader.js";
var config = {
  arguments: [],
  dataUrl: buildUrl + "/WebBuild.data",
  frameworkUrl: buildUrl + "/WebBuild.framework.js",
  codeUrl: buildUrl + "/WebBuild.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "EjercicioTopos",
  productVersion: "0.1",
  showBanner: unityShowBanner,
};

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  var aux = document.createElement("div");
  aux.innerHTML += "<h1>Sorry, this game is not available for mobile devices.</h1>";
  document.getElementById("wack-mole-container").appendChild(aux);
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