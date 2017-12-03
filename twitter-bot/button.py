import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
#GPIO.setup(24, GPIO.OUT)  #LED to GPIO24

try:
    while True:
         button_state = GPIO.input(18)
         if button_state == False:
#             GPIO.output(24, True)
		from subprocess import call
                call(["nodejs", "/home/pi/github/bike-lane-report/twitter-bot/camera.js"])
		call(["nodejs", "/home/pi/github/bike-lane-report/twitter-bot/map.js"])
#             print('Button Pressed...')
		time.sleep(0.2)
         else:
#             GPIO.output(24, False)
             print('Button not pressed')

except:
    GPIO.cleanup()
