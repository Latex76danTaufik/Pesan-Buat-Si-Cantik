function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.remove("hidden");
  popup.style.transform = "translate(-50%, -50%) scale(1)";

  // Sembunyikan tombol awal untuk popup pertama
  if (popupId === "popup1") {
    document.getElementById("show-popup-btn").style.display = "none";
    setTimeout(() => startTypingEffect("typing-text", "Hai, Aku cuma mau bilang ini ke kamu..."), 300);
  }
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.transform = "translate(-50%, -50%) scale(0)";
  setTimeout(() => popup.classList.add("hidden"), 300);
}

function showNextPopup(currentPopupId, nextPopupId, textId, message, additionalTextId = null, additionalMessage = null) {
  closePopup(currentPopupId);

  setTimeout(() => {
    showPopup(nextPopupId);
    setTimeout(() => {
      startTypingEffect(textId, message);
      if (additionalTextId && additionalMessage) {
        setTimeout(() => startTypingEffect(additionalTextId, additionalMessage), message.length * 100);
      }
    }, 300);
  }, 300);
}

function startTypingEffect(elementId, message) {
  const element = document.getElementById(elementId);
  element.textContent = ""; // Reset teks
  typeEffect(element, message, 100);
}

function typeEffect(element, text, delay = 100, callback) {
  let index = 0;

  function typing() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(typing, delay);
    } else if (callback) {
      callback();
    }
  }

  typing();
}

// Tombol 'maap ga dulu'
function menolak() {
  alert("Yah, gapapa kok. Semoga kita tetap bisa berteman baik! 😊");
  closePopup("popup3");
}

function startTypingEffect() {
  const text1 = document.getElementById("typing-text");
  const text2 = document.getElementById("typing-text-2");
  const text3 = document.getElementById("typing-text-3");
  const text4 = document.getElementById("typing-text-4");
  const text5 = document.getElementById("typing-text-5");
  const text6 = document.getElementById("typing-text-6");
  const text7 = document.getElementById("typing-text-7");


  text1.textContent = "";
  text2.textContent = "";
  text3.textContent = "";
  text4.textContent = "";
  text5.textContent = "";
  text6.textContent = "";
  text7.textContent = "";


  typeEffect(text1, "Hai, Aku cuma mau bilang ini ke kamu...", 100, () => {
  typeEffect(text2, " Aku sebenernya suka banget sama kamu ❤️", 100, () => {
  typeEffect(text3, "️kamu itu Cantik,Imut, Gemoy, tapi sayang cuma ngambekan aja 😝",100, () => {
  typeEffect(text4, "Yay! Jadian yuk??", 100, () => {
  typeEffect(text5, "🫰I Love you🫰", 100, () => {
typeEffect(text6, "😘sekarang aku milik mu yaa cantik😚", 100, () => {
typeEffect(text7, "💕semoga kita bisa langgeng selamanya 😇", 100);
});
  }) 
      })
      });
    });
  });
}

function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.remove("hidden");
  popup.style.transform = "translate(-50%, -50%) scale(1)";
  
  // Sembunyikan tombol awal jika popup pertama muncul
  if (popupId === "popup1") {
    document.getElementById("show-popup-btn").style.display = "none";
    setTimeout(() => startTypingEffect("typing-text", "Hai, Aku cuma mau bilang ini ke kamu..."), 300); // Animasi teks 1
  }
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.transform = "translate(-50%, -50%) scale(0)";
  setTimeout(() => popup.classList.add("hidden"), 300);
}

function showNextPopup(currentPopupId, nextPopupId, textId, message, additionalTextId = null, additionalMessage = null) {
  // Tutup popup saat ini
  closePopup(currentPopupId);

  // Tampilkan popup berikutnya setelah sedikit delay
  setTimeout(() => {
    showPopup(nextPopupId);
    setTimeout(() => {
      startTypingEffect(textId, message);
      if (additionalTextId && additionalMessage) {
        setTimeout(() => startTypingEffect(additionalTextId, additionalMessage), message.length * 100);
      }
    }, 300);
  }, 300);
}

function startTypingEffect(elementId, message) {
  const element = document.getElementById(elementId);
  element.textContent = ""; // Reset teks
  typeEffect(element, message, 100);
}

function typeEffect(element, text, delay = 100, callback) {
  let index = 0;

  function typing() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(typing, delay);
    } else if (callback) {
      callback();
    }
  }

  typing();
}

function playMusic() {
  const music = document.getElementById("background-music");
  music.play();
}