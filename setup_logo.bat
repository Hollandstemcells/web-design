@echo off
echo Moving logo file...
copy "C:\Users\Gebruiker\.gemini\antigravity\brain\c5c8530c-b027-4ef9-9972-c84aa732b669\uploaded_media_1770038619603.png" "images\header-logo.png"
if %errorlevel% equ 0 (
    echo Logo moved successfully!
) else (
    echo Failed to move logo.
)
exit
