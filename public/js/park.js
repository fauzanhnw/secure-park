// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBf7xFWa6wM3Ut8g6EQKNyhzYqDTAHwrCs",
  authDomain: "park-a30bc.firebaseapp.com",
  projectId: "park-a30bc",
  storageBucket: "park-a30bc.appspot.com",
  messagingSenderId: "697843581952",
  appId: "1:697843581952:web:c3d5a2867e1006a227c4e5",
  measurementId: "G-9BWLEKF8TS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
var database1 = firebase.database().ref('Slots1_5');
var database2 = firebase.database().ref('slots6_10');

function ubahWarna(element, status) {
    if (status === 'tersedia') {
        element.classList.remove('slot-terisi');
        element.classList.add('slot-tersedia');
    } else {
        element.classList.remove('slot-tersedia');
        element.classList.add('slot-terisi');
    }
}

// Listen for changes in the database for slots 1-5
database1.on('value', (snapshot) => {
    const slots = snapshot.val();
    for (const slotId in slots) {
        const slotElement = document.querySelector(`img[data-slot-id="${slotId}"]`);
        if (slotElement) {
            ubahWarna(slotElement, slots[slotId]);
        }
    }
});

// Listen for changes in the database for slots 6-10
database2.on('value', (snapshot) => {
    const slots = snapshot.val();
    for (const slotId in slots) {
        const slotElement = document.querySelector(`img[data-slot-id="${slotId}"]`);
        if (slotElement) {
            ubahWarna(slotElement, slots[slotId]);
        }
    }
});

// Add event listener to toggle fullscreen mode
document.querySelector(".toggle").addEventListener("click", function (event) {
    if (document.fullscreenElement) {
        // If there is a fullscreen element, exit full screen.
        document.exitFullscreen();
        return;
    }
    // Make the .element div fullscreen.
    document.querySelector(".element").requestFullscreen();
});
