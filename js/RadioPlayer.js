/*---------------------------------------------------
    
    MUSIC PLAYER #01 by glenthemes
    
    Initial release: 2017/04/10
    Major update #1: 2021/08/12
    Major update #2: 2023/11/25
	Last updated: 2024/03/17
    
    hi there traveller!
    it's been a tradition of mine to put hidden
    learning resources here in the comments, so
    let's continue that :)
    
    to build a music player you need javascript
    as well as html components. css is wherever you
    want the player to be and how you want it to look!
    
    > audio javascript:
      https://www.w3schools.com/jsref/dom_obj_audio.asp
    > audio html:
      https://www.w3schools.com/tags/tag_audio.asp
    
---------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
	let glenplayer01 = document.querySelector("[glenplayer01]");
	if (glenplayer01) {
	  let topText = glenplayer01.querySelector("[top-text]");
	  let botText = glenplayer01.querySelector("[bottom-text]");
	  let ongaku = glenplayer01.querySelector("audio[src]");
	  let onryou = 1;

	  if(ongaku){
		// volume
		if(ongaku.matches("[volume]")){
		  let vol = ongaku.getAttribute("volume");
		  vol = vol.trim();
		  if(vol !== ""){
			if(vol.slice(-1) == "%"){
			  vol = vol.replaceAll("%","");
			  if (!isNaN(vol)) {
				onryou = vol / 100;
			  }
			}
		  }
		}

		// autoplay
		if(ongaku.matches("[autoplay]")){
		  ongaku.removeAttribute("autoplay");
		  ayypee = true;
		}
	  }

	  // wrap inner - b
	  let sjcii = document.createElement("div");
	  glenplayer01.before(sjcii);
	  glenplayer01.querySelectorAll(":scope > *")?.forEach(e => {
		sjcii.append(e);
	  })
	  glenplayer01.replaceChildren();
	  glenplayer01.append(sjcii);
	  sjcii.classList.add("myrrh");

	  // wrap inner - a
	  let mlcdc = document.createElement("div");
	  sjcii.before(mlcdc);
	  mlcdc.append(sjcii);
	  mlcdc.classList.add("kava")

	  // wrap toptext + bottext	
	  let irfjq = document.createElement("div");
	  irfjq.setAttribute("song-info", "");
	  sjcii.prepend(irfjq);
	  sjcii.querySelectorAll(":scope > *")?.forEach(f => {
		if (f.matches("[top-text]") || f.matches("[bottom-text]")) {
		  irfjq.append(f)
		}
	  })

	  // circle - a
	  let lvvil = document.createElement("div");
	  lvvil.classList.add("betony-h");
	  irfjq.after(lvvil);

	  // circle - b
	  let xbubr = document.createElement("div");
	  xbubr.classList.add("betony");
	  lvvil.append(xbubr);

	  // btn: paused (play arrow) - a
	  let nekkw = document.createElement("button");
	  nekkw.classList.add("tarragon");
	  nekkw.setAttribute("aria-label", "Play Music")
	  xbubr.append(nekkw)

	  // btn: paused (play arrow)	- b
	  let gobpa = document.createElement("div");
	  gobpa.classList.add("btn-paused");
	  nekkw.append(gobpa)

	  // btn: playing (dancing bars) - a
	  let pttmd = document.createElement("button");
	  pttmd.classList.add("hyssop");
	  pttmd.setAttribute("aria-label", "Pause Music");
	  pttmd.style.display = "none";
	  xbubr.append(pttmd)

	  // btn: playing (dancing bars) - a
	  let blfiv = document.createElement("div");
	  blfiv.classList.add("btn-playing");
	  pttmd.append(blfiv)

	  // btn: playing dancing bars) - b
	  for(let i = 0; i < 5; i++){
		let zfpxf = document.createElement("div");
		zfpxf.classList.add("vodka");
		blfiv.append(zfpxf)
	  }

	  if(ongaku){
		let audSrc = ongaku.src.trim();
		ongaku.addEventListener("loadedmetadata", () => {
			ongaku.muted = false;
			ongaku.volume = onryou;

			nekkw.addEventListener("click", () => {
				ongaku.play();
			})

			pttmd.addEventListener("click", () => {
				ongaku.pause();
			})

			// event: play
			ongaku.addEventListener("play", e => {
			  nekkw.style.display = "none";
			  pttmd.style.display = "flex";
			})

			// event: pause
			ongaku.addEventListener("pause", e => {
			  nekkw.style.display = "flex";
			  pttmd.style.display = "none";
			})

			// event: end/loop
			if(!ongaku.matches("[loop]")){
			  ongaku.addEventListener("ended", e => {
				nekkw.style.display = "flex";
				pttmd.style.display = "none";
			  })
			}
		})//end: audio loaded
	  } //end: if audio[src] exists
	} //end: if [glenplayer01] exists
})//end DOMContentLoaded
