# awsSolArchPro


1. ionic build android --prod --release
rm *.apk
cp /Users/faeezshaikh/git/awsSolArchPro/platforms/android/build/outputs/apk/android-release-unsigned.apk .
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore awsArch-key.keystore android-release-unsigned.apk awsArch-
/Users/faeezshaikh/Library/Android/sdk/build-tools/23.0.2/zipalign -v 4 android-release-unsigned.apk AWS-Certified-Pro-Arch.apk



Troubleshooting:
===============
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb kill-server
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb start-server
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb devices



1. Reset Password , entered invalid email..nothing happened
2. Error Msg on Registration (blank Emails)..v ugly msg
3. Sharing - toast showing even on success.


Clicking X on ExamStarting Modal starts Exam

Reset Password when tested with invalid or unpresent email does a 400 bad request with no response to user on UI.
Error Msgs on Login and Registration

Share Mesage Verbiage - Happy path with URL Links and imgs
Test Sharing on Device
Testing


Cross-promotion (in-house ads)
chat with author
Chat with other users
Comment on a question



Login Page styling - remaining pages 
Change username to email on Login and Reg Pages




Nice to have:
1. Ionic Cloud - Push Notification

3. Slides on login to walk through


Till ! # 67 from pdf




2. Phone back button give warning - about to abort
In Explanation Modal: Show correct answer also.
Populate All Exams
Disable Prev, Next messages on last first items.
Warning message before 'Submit'
Toast for Social sharing
bug: Timer up causes page to crash when scrollToTop fails on menu list home page.
Scoring accuracy
Randomize Questions and within questions randomize options
Back Button in  Review Mode in Navbar goes to Menu.
Bug: going back to list while timer is running will elapse timer on the lists page
Timer
Best Score
Contact Us
Explanation
Login
CloseResuts - clear exam
Scoring


FB Mobile App Ads:
https://developers.facebook.com/videos/f8-2016/driving-growth-with-mobile-app-ads/
