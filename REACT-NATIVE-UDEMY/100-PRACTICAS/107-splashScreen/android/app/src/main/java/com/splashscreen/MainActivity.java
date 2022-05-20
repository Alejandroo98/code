package com.splashscreen;

import android.os.Bundle;
import android.media.MediaPlayer;
import com.facebook.react.ReactActivity;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {
  

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    MediaPlayer myMediaPlayer = MediaPlayer.create( getApplicationContext() , R.raw.splashscreen);
    // mediaPlayer.prepare();
    myMediaPlayer.start();
    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this); // <- display the generated bootsplash.xml drawable over our MainActivity
  }
  

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "splashScreen";
  }
}
