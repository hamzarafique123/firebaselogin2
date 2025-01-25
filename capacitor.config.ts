import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.login.login2',
  appName: 'firebaselogin2',
  webDir: 'www',
  bundledWebRuntime:false,
  plugins:{
    GoogleAuth:{
      scopes:["profile","email"],
      serverClientId:"668167011694-q8jad1h3rns9nqg5k41dd228ed018h0k.apps.googleusercontent.com",
      forceCodeForRefreshToken:true
    }
  }
  
};

export default config;
