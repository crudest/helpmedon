import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Height of Fullscreen Window
    fullscreenWindowHeight: window.innerHeight + "px",

    // Active Window State
    activeWindow: "BiographyWindow", 

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2, 

    windows: [
      {
        windowId: "BiographyWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Home", // Display Name (title under icon)
        windowComponent: 'window', // Window Component (can be changed to use modified windows)
        windowContent: 'bio', // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null
        }, // Window Content Padding 
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "bio.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false // Window Fullscreen State [true, false]
      },
      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Menu", // Display Name (title under icon)
        windowComponent: 'menux', // Window Component (can be changed to use modified windows)
        windowContent: '', // Window Content (used under slots)
        windowContentPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        }, // Window Content Padding 
        position: "absolute", // Window Position
        positionX: "75vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "menu.png", // Window Icon Image
        altText: "Résumé", // Window Icon Alt Text
        fullscreen: false // Window Fullscreen State [true, false]
      },
     
      {
        windowId: "MailWindow", 
          windowState: "close",
          displayName: "Mail",
          windowComponent: 'mail',
          windowContent: '',
          windowContentPadding: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "mail.png",
          altText: "Mail",
          fullscreen: false
      },

      {
        windowId: "OpenSourceWindow", 
          windowState: "close",
          displayName: "Directions",
          windowComponent: 'window',
          windowContent: 'opensource',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "maps.png",
          altText: "Open Source Projects",
          fullscreen: false
      },
      {
        windowId: "OpenSourceWindow", 
          windowState: "close",
          displayName: "Directions",
          windowComponent: 'window',
          windowContent: 'opensource',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "maps.png",
          altText: "Open Source Projects",
          fullscreen: false
      },
      {
        windowId: "OpenSourceWindow", 
          windowState: "close",
          displayName: "Directions",
          windowComponent: 'window',
          windowContent: 'opensource',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "maps.png",
          altText: "Open Source Projects",
          fullscreen: false
      },
      {
        windowId: "OpenSourceWindow", 
          windowState: "close",
          displayName: "Directions",
          windowComponent: 'window',
          windowContent: 'opensource',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "maps.png",
          altText: "Open Source Projects",
          fullscreen: false
      },
      {
        windowId: "OpenSourceWindow", 
          windowState: "close",
          displayName: "Directions",
          windowComponent: 'window',
          windowContent: 'opensource',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "maps.png",
          altText: "Open Source Projects",
          fullscreen: false
      },
      {
        windowId: "OpenSourceWindow", 
          windowState: "close",
          displayName: "Directions",
          windowComponent: 'window',
          windowContent: 'opensource',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "maps.png",
          altText: "Open Source Projects",
          fullscreen: false
      },
      {
        windowId: "OpenSourceWindow", 
          windowState: "close",
          displayName: "Directions",
          windowComponent: 'window',
          windowContent: 'opensource',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "maps.png",
          altText: "Open Source Projects",
          fullscreen: false
      },

      
      // register your new windows here
      {
        windowId: "ResumeWindow", // same ID as ResumeWindow
        windowState: "close",
        displayName: "", // change the display name if needed
        windowComponent: 'menington',
        windowContent: '', // same content as ResumeWindow
        windowContentPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        },
        position: "absolute",
        positionX: "27vw", // change the position if needed
        positionY: "11vh", // change the position if needed
        iconImage: "blend.png", // same icon as ResumeWindow
        altText: "Another Résumé", // change the alt text if needed
        fullscreen: false,
        showInNavbar: false
      },
      {
        windowId: "ResumeWindow", // unique ID for the second resume window
        windowState: "close",
        displayName: "", // change the display name if needed
        windowComponent: 'menud',
        windowContent: '', // same content as ResumeWindow
        windowContentPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        },
        position: "absolute",
        positionX: "10vw", // change the position if needed
        positionY: "15vh", // change the position if needed
        iconImage: "blend.png", // same icon as ResumeWindow
        altText: "Yet Another Résumé", // change the alt text if needed
        fullscreen: false,
        showInNavbar: false
        
      },
      {
        windowId: "ResumeWindow", // unique ID for the second resume window
        windowState: "close",
        displayName: "", // change the display name if needed
        windowComponent: 'menud',
        windowContent: '', // same content as ResumeWindow
        windowContentPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        },
        position: "absolute",
        positionX: "10vw", // change the position if needed
        positionY: "15vh", // change the position if needed
        iconImage: "blend.png", // same icon as ResumeWindow
        altText: "Yet Another Résumé", // change the alt text if needed
        fullscreen: false,
        showInNavbar: false
        
      },
      
     
    ],
    mailContent: '',
    mailSender: '',
    mailSubject: 'Contact Us',
  },
  mutations: {
    // Active Window Mutator
    setActiveWindow(state, window) {
      console.log(window);
      state.activeWindow = window
    },

    // Pushes Active Window onto Active Windows Array
    pushActiveWindow(state, window) {
      if (window.showInNavbar == true) {
      state.activeWindows.push(window)
      }
    },

    // Removes Active Window from Active Windows Array
    popActiveWindow(state, window) {
      const windowIndex = state.activeWindows.indexOf(window);
      if (windowIndex !== -1) {
        state.activeWindows.splice(windowIndex, 1)
      }
    },

    // Z-index increment function
    zIndexIncrement(state, windowID) {
      state.zIndex += 1
      document.getElementById(windowID).style.zIndex = state.zIndex
    },

    // Set height of max-height of fullscreen window
    setFullscreenWindowHeight(state, height) {
      state.fullscreenWindowHeight = height
    },

    updateMail(state, local) {
      state.isShownMail = local
    },
    updateMailSubject(state, local) {
      state.mailSubject = local
    },
    updateMailContent(state, local) {
      state.mailContent = local
    },
    updateMailSender(state, local) {
      state.mailSender = local
    },

    setFullscreen(state, payload) {
      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();
      window.fullscreen = payload.fullscreen;
    },

    // Window State Mutator
    setWindowState(state, payload) {
      // payload = {'windowState': 'open', 'windowID': 'WindowOne'}

      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();

      var preventAppendingOpenWindow = false;
      if (window.windowState == "open" || window.windowState == "minimize") {
        preventAppendingOpenWindow = true;
      }

      if (payload.windowState == "open") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("zIndexIncrement", payload.windowID);
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", payload.windowID);
        }, 0);
        if (preventAppendingOpenWindow == false) {
          setTimeout(() => {
            this.commit("pushActiveWindow", window);
          }, 0);
        }
      } else if (payload.windowState == "close") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("popActiveWindow", window);
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", "nil"); 
        }, 0);
      } else if (payload.windowState == "minimize") {
        window.windowState = payload.windowState;
        this.commit("setActiveWindow", "nil"); 
      } else {
        console.log("Error: windowState not found or invalid");
      }
    },
  },
  getters: {
    // Active Window Getter
    getActiveWindow: (state) => {
      return state.activeWindow;
    },

    // Window Getter
    getWindowById: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id);
    },

    getWindowFullscreen: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id).fullscreen;
    },

    getWindows: (state) => {
      return state.windows;
    },

    getActiveWindows(state) {
      return state.activeWindows;
    },

    getFullscreenWindowHeight(state) {
      return state.fullscreenWindowHeight;
    },

    mailContent: state => {
      return state.mailContent
    },

    mailSubject: state => {
      return state.mailSubject
    },

    mailSender: state => {
      return state.mailSender
    },
  },
});
